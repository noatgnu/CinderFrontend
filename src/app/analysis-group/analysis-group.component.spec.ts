import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { AnalysisGroupComponent } from './analysis-group.component';

describe('AnalysisGroupComponent', () => {
  let component: AnalysisGroupComponent;
  let fixture: ComponentFixture<AnalysisGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
