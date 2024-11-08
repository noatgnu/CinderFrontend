import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupSampleFileComponent } from './analysis-group-sample-file.component';

describe('AnalysisGroupSampleFileComponent', () => {
  let component: AnalysisGroupSampleFileComponent;
  let fixture: ComponentFixture<AnalysisGroupSampleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupSampleFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupSampleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
