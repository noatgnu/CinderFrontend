import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { HeatmapPlotComponent } from './heatmap-plot.component';

describe('HeatmapPlotComponent', () => {
  let component: HeatmapPlotComponent;
  let fixture: ComponentFixture<HeatmapPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapPlotComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
