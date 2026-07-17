import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { CollateViewComponent } from './collate-view.component';

describe('CollateViewComponent', () => {
  let component: CollateViewComponent;
  let fixture: ComponentFixture<CollateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateViewComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
