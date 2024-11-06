import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupFileSpecificMetadataComponent } from './analysis-group-file-specific-metadata.component';

describe('AnalysisGroupFileSpecificMetadataComponent', () => {
  let component: AnalysisGroupFileSpecificMetadataComponent;
  let fixture: ComponentFixture<AnalysisGroupFileSpecificMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupFileSpecificMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupFileSpecificMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
