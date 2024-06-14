import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupViewComponent } from './analysis-group-view.component';

describe('AnalysisGroupViewComponent', () => {
  let component: AnalysisGroupViewComponent;
  let fixture: ComponentFixture<AnalysisGroupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
