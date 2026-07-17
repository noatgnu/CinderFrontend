import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { CollateProjectListComponent } from './collate-project-list.component';

describe('CollateProjectListComponent', () => {
  let component: CollateProjectListComponent;
  let fixture: ComponentFixture<CollateProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateProjectListComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
