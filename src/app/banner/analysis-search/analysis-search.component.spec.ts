import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSearchComponent } from './analysis-search.component';

describe('AnalysisSearchComponent', () => {
  let component: AnalysisSearchComponent;
  let fixture: ComponentFixture<AnalysisSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
