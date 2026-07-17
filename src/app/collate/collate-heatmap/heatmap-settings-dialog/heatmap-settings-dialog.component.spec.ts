import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { HeatmapSettingsDialogComponent } from './heatmap-settings-dialog.component';

describe('HeatmapSettingsDialogComponent', () => {
  let component: HeatmapSettingsDialogComponent;
  let fixture: ComponentFixture<HeatmapSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapSettingsDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
