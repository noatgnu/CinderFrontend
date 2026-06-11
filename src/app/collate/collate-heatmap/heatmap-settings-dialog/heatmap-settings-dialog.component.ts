import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { HeatmapPersistentSettings, defaultHeatmapPersistentSettings } from '../collate-heatmap.types';

@Component({
  selector: 'app-heatmap-settings-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatSlideToggle,
    MatSelect,
    MatOption,
    MatDivider,
  ],
  templateUrl: './heatmap-settings-dialog.component.html',
  styleUrl: './heatmap-settings-dialog.component.scss',
})
export class HeatmapSettingsDialogComponent {
  settings: HeatmapPersistentSettings = defaultHeatmapPersistentSettings();

  @Input() set initialSettings(value: HeatmapPersistentSettings | null | undefined) {
    if (value) {
      this.settings = { ...value };
    }
  }

  constructor(private dialogRef: MatDialogRef<HeatmapSettingsDialogComponent>) {}

  save(): void {
    this.dialogRef.close(this.settings);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  reset(): void {
    this.settings = defaultHeatmapPersistentSettings();
  }
}
