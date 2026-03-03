import { Component, HostListener, OnInit, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { WebService } from '../../web.service';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-command-palette-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
],
  template: `
    <div class="command-palette-wrapper">
      <mat-form-field appearance="fill" class="search-field">
        <mat-icon matPrefix>search</mat-icon>
        <input matInput 
               [formControl]="searchControl" 
               placeholder="Search Projects or Analysis Groups... (Esc to close)"
               [matAutocomplete]="auto"
               #searchInput>
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onSelect($event.option.value)">
          @if (results().length > 0) {
            @for (item of results(); track item.id + item.type) {
              <mat-option [value]="item">
                <mat-icon>{{ item.type === 'project' ? 'folder' : 'analytics' }}</mat-icon>
                <span>{{ item.name }}</span>
                <small class="type-badge">{{ item.type }}</small>
              </mat-option>
            }
          } @else if (searchControl.value) {
            <mat-option disabled>No results found</mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>
      <div class="palette-footer">
        <span>Use arrow keys to navigate, Enter to select</span>
      </div>
    </div>
  `,
  styles: [`
    .command-palette-wrapper {
      padding: 8px;
      min-width: 500px;
    }
    .search-field {
      width: 100%;
    }
    .type-badge {
      margin-left: 8px;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(0,0,0,0.05);
      font-size: 10px;
      text-transform: uppercase;
    }
    .palette-footer {
      padding: 8px;
      font-size: 11px;
      opacity: 0.6;
      border-top: 1px solid rgba(0,0,0,0.05);
      text-align: right;
    }
  `]
})
export class CommandPaletteDialogComponent implements OnInit {
  searchControl = new FormControl('');
  results = signal<any[]>([]);

  constructor(
    private web: WebService, 
    private router: Router,
    private dialogRef: MatDialogRef<CommandPaletteDialogComponent>
  ) {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        if (!value || value.length < 2) return of([]);
        return forkJoin({
          projects: this.web.getProjects(undefined, 5, 0, value),
          groups: this.web.getAnalysisGroups(undefined, 5, 0, value)
        }).pipe(
          switchMap(res => {
            const projects = res.projects.results.map(p => ({ ...p, type: 'project' }));
            const groups = res.groups.results.map(g => ({ ...g, type: 'analysis-group' }));
            return of([...projects, ...groups]);
          })
        );
      })
    ).subscribe(combined => {
      this.results.set(combined);
    });
  }

  onSelect(item: any) {
    this.dialogRef.close();
    if (item.type === 'project') {
      this.router.navigate(['/project', item.id]);
    } else {
      this.router.navigate(['/analysis-group', item.id]);
    }
  }
}

@Component({
  selector: 'app-command-palette',
  standalone: true,
  imports: [MatDialogModule],
  template: ''
})
export class CommandPaletteComponent {
  constructor(private dialog: MatDialog) {}

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.openPalette();
    }
  }

  openPalette() {
    if (this.dialog.openDialogs.some(d => d.componentInstance instanceof CommandPaletteDialogComponent)) {
      return;
    }
    this.dialog.open(CommandPaletteDialogComponent, {
      width: '600px',
      position: { top: '10%' },
      panelClass: 'command-palette-panel'
    });
  }
}
