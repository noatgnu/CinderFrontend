import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

import { CollateEditorComponent } from './collate-editor.component';

describe('CollateEditorComponent', () => {
  let component: CollateEditorComponent;
  let fixture: ComponentFixture<CollateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateEditorComponent],
      providers: [importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
