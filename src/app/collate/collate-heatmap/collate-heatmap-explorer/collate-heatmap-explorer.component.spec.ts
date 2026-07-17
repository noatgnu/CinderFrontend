import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { CollateHeatmapExplorerComponent } from './collate-heatmap-explorer.component';

describe('CollateHeatmapExplorerComponent', () => {
  let component: CollateHeatmapExplorerComponent;
  let fixture: ComponentFixture<CollateHeatmapExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateHeatmapExplorerComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(withXhr()),
        importProvidersFrom(PlotlyModule.forRoot(PlotlyJS)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CollateHeatmapExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
