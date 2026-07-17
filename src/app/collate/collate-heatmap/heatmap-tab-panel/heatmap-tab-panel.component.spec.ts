import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { HeatmapTabPanelComponent } from './heatmap-tab-panel.component';

describe('HeatmapTabPanelComponent', () => {
  let component: HeatmapTabPanelComponent;
  let fixture: ComponentFixture<HeatmapTabPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatmapTabPanelComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
