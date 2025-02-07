import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapePlotFilterDialogComponent } from './cytoscape-plot-filter-dialog.component';

describe('CytoscapePlotFilterDialogComponent', () => {
  let component: CytoscapePlotFilterDialogComponent;
  let fixture: ComponentFixture<CytoscapePlotFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CytoscapePlotFilterDialogComponent]
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
