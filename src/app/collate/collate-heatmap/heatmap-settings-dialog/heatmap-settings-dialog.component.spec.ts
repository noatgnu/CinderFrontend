import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapSettingsDialogComponent } from './heatmap-settings-dialog.component';

describe('HeatmapSettingsDialogComponent', () => {
  let component: HeatmapSettingsDialogComponent;
  let fixture: ComponentFixture<HeatmapSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapSettingsDialogComponent]
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
