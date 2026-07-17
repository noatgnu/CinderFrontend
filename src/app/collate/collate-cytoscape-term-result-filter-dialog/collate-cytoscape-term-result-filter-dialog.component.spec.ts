import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CollateCytoscapeTermResultFilterDialogComponent } from './collate-cytoscape-term-result-filter-dialog.component';

describe('CollateCytoscapeTermResultFilterDialogComponent', () => {
  let component: CollateCytoscapeTermResultFilterDialogComponent;
  let fixture: ComponentFixture<CollateCytoscapeTermResultFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateCytoscapeTermResultFilterDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateCytoscapeTermResultFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
