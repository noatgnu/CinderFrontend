import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateProjectAnalysisGroupVisibilityDialogComponent } from './collate-project-analysis-group-visibility-dialog.component';

describe('CollateProjectAnalysisGroupVisibilityDialogComponent', () => {
  let component: CollateProjectAnalysisGroupVisibilityDialogComponent;
  let fixture: ComponentFixture<CollateProjectAnalysisGroupVisibilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateProjectAnalysisGroupVisibilityDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateProjectAnalysisGroupVisibilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
