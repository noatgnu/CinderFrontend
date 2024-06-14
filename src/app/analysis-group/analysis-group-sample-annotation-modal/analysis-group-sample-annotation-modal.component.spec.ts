import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupSampleAnnotationModalComponent } from './analysis-group-sample-annotation-modal.component';

describe('AnalysisGroupSampleAnnotationModalComponent', () => {
  let component: AnalysisGroupSampleAnnotationModalComponent;
  let fixture: ComponentFixture<AnalysisGroupSampleAnnotationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupSampleAnnotationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupSampleAnnotationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
