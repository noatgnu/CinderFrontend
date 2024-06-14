import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupComparisonMatrixModalComponent } from './analysis-group-comparison-matrix-modal.component';

describe('AnalysisGroupComparisonMatrixModalComponent', () => {
  let component: AnalysisGroupComparisonMatrixModalComponent;
  let fixture: ComponentFixture<AnalysisGroupComparisonMatrixModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupComparisonMatrixModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupComparisonMatrixModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
