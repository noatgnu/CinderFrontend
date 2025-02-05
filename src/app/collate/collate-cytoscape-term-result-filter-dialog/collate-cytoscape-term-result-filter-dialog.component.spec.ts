import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateCytoscapeTermResultFilterDialogComponent } from './collate-cytoscape-term-result-filter-dialog.component';

describe('CollateCytoscapeTermResultFilterDialogComponent', () => {
  let component: CollateCytoscapeTermResultFilterDialogComponent;
  let fixture: ComponentFixture<CollateCytoscapeTermResultFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateCytoscapeTermResultFilterDialogComponent]
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
