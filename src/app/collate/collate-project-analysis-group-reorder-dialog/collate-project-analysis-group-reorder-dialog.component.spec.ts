import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CollateProjectAnalysisGroupReorderDialogComponent } from './collate-project-analysis-group-reorder-dialog.component';

describe('CollateProjectAnalysisGroupReorderDiakigComponent', () => {
  let component: CollateProjectAnalysisGroupReorderDialogComponent;
  let fixture: ComponentFixture<CollateProjectAnalysisGroupReorderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateProjectAnalysisGroupReorderDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateProjectAnalysisGroupReorderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
