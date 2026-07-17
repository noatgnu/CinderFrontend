import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { CytoscapePlotComponent } from './cytoscape-plot.component';

describe('CytoscapePlotComponent', () => {
  let component: CytoscapePlotComponent;
  let fixture: ComponentFixture<CytoscapePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CytoscapePlotComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CytoscapePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
