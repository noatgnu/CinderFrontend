import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnalysisGroupDialogComponent } from './create-analysis-group-dialog.component';

describe('CreateAnalysisGroupDialogComponent', () => {
  let component: CreateAnalysisGroupDialogComponent;
  let fixture: ComponentFixture<CreateAnalysisGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAnalysisGroupDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAnalysisGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
