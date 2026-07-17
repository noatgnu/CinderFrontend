import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { AnalysisGroupGeneralMetadataComponent } from './analysis-group-general-metadata.component';

describe('AnalysisGroupGeneralMetadataComponent', () => {
  let component: AnalysisGroupGeneralMetadataComponent;
  let fixture: ComponentFixture<AnalysisGroupGeneralMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupGeneralMetadataComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupGeneralMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
