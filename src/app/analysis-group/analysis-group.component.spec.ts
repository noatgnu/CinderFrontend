import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupComponent } from './analysis-group.component';

describe('AnalysisGroupComponent', () => {
  let component: AnalysisGroupComponent;
  let fixture: ComponentFixture<AnalysisGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
