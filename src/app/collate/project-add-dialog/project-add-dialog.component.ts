import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Project, ProjectQuery} from "../../project/project";
import {WebService} from "../../web.service";
import {ProjectSearchComponent} from "../project-search/project-search.component";
import {MatButton} from "@angular/material/button";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-project-add-dialog',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ProjectSearchComponent,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatButton
    ],
    templateUrl: './project-add-dialog.component.html',
    styleUrl: './project-add-dialog.component.scss'
})
export class ProjectAddDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  formProjectSearch = this.fb.group({
    searchTerm: new FormControl<string>("", Validators.required),
    selectedProjects: new FormControl<Project[]|null>([])
  })

  projectPageSize = 5
  projectPageIndex = 0
  projectQuery: ProjectQuery|undefined = undefined
  selectedMultipleProjects: Project[] = []
  multipleSelection = true

  constructor(
    private dialogRef: MatDialogRef<ProjectAddDialogComponent>,
    private fb: FormBuilder,
    private web: WebService,
    private cdr: ChangeDetectorRef
  ) {
    this.web.getProjects(undefined, this.projectPageSize, 0, undefined)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.projectQuery = data;
        this.cdr.markForCheck();
      });
    this.formProjectSearch.controls.searchTerm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: string|null) => {
        if (value) {
          this.web.getProjects(undefined, this.projectPageSize, 0, value)
            .pipe(takeUntil(this.destroy$))
            .subscribe((data) => {
              this.projectQuery = data;
              this.cdr.markForCheck();
            });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleSelectedProjects(projects: Project[]) {
    this.selectedMultipleProjects = projects
  }

  close() {
    this.dialogRef.close()
  }

  save() {
    this.dialogRef.close(this.selectedMultipleProjects)
  }
}
