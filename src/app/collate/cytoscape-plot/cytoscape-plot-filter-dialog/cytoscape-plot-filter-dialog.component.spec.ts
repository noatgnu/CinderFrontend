import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CytoscapePlotFilterDialogComponent } from './cytoscape-plot-filter-dialog.component';

describe('CytoscapePlotFilterDialogComponent', () => {
  let component: CytoscapePlotFilterDialogComponent;
  let fixture: ComponentFixture<CytoscapePlotFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CytoscapePlotFilterDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: { projects: [], analysisGroups: [], currentFilter: {} } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CytoscapePlotFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
