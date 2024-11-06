import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupMetadataCreationDialogComponent } from './analysis-group-metadata-creation-dialog.component';

describe('AnalysisGroupMetadataCreationDialogComponent', () => {
  let component: AnalysisGroupMetadataCreationDialogComponent;
  let fixture: ComponentFixture<AnalysisGroupMetadataCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupMetadataCreationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupMetadataCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
