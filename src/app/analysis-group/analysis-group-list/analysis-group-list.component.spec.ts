import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupListComponent } from './analysis-group-list.component';

describe('AnalysisGroupListComponent', () => {
  let component: AnalysisGroupListComponent;
  let fixture: ComponentFixture<AnalysisGroupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalysisGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
