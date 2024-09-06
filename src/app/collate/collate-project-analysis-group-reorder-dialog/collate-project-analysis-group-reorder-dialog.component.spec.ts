import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateProjectAnalysisGroupReorderDialogComponent } from './collate-project-analysis-group-reorder-dialog.component';

describe('CollateProjectAnalysisGroupReorderDiakigComponent', () => {
  let component: CollateProjectAnalysisGroupReorderDialogComponent;
  let fixture: ComponentFixture<CollateProjectAnalysisGroupReorderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateProjectAnalysisGroupReorderDialogComponent]
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
