import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupMetadataImportComponent } from './analysis-group-metadata-import.component';

describe('AnalysisGroupMetadataImportComponent', () => {
  let component: AnalysisGroupMetadataImportComponent;
  let fixture: ComponentFixture<AnalysisGroupMetadataImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupMetadataImportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupMetadataImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should lowercase mixed-case file extensions so they match allowFileType', () => {
    const file = new File([''], 'Metadata.CSV');
    expect(component.getFileExntension(file)).toBe('csv');
  });
});
