import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AnalysisGroupSampleFileComponent } from './analysis-group-sample-file.component';

describe('AnalysisGroupSampleFileComponent', () => {
  let component: AnalysisGroupSampleFileComponent;
  let fixture: ComponentFixture<AnalysisGroupSampleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupSampleFileComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
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
