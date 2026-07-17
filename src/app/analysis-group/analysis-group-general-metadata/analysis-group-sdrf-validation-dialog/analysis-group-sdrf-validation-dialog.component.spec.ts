import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AnalysisGroupSdrfValidationDialogComponent } from './analysis-group-sdrf-validation-dialog.component';

describe('AnalysisGroupSdrfValidationDialogComponent', () => {
  let component: AnalysisGroupSdrfValidationDialogComponent;
  let fixture: ComponentFixture<AnalysisGroupSdrfValidationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupSdrfValidationDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupSdrfValidationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
