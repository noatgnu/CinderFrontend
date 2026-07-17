import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { AnalysisGroupViewComponent } from './analysis-group-view.component';

describe('AnalysisGroupViewComponent', () => {
  let component: AnalysisGroupViewComponent;
  let fixture: ComponentFixture<AnalysisGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupViewComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
