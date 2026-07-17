import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { VolcanoPlotComponent } from './volcano-plot.component';

describe('VolcanoPlotComponent', () => {
  let component: VolcanoPlotComponent;
  let fixture: ComponentFixture<VolcanoPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolcanoPlotComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolcanoPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
