import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisGroupGeneralMetadataComponent } from './analysis-group-general-metadata.component';

describe('AnalysisGroupGeneralMetadataComponent', () => {
  let component: AnalysisGroupGeneralMetadataComponent;
  let fixture: ComponentFixture<AnalysisGroupGeneralMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisGroupGeneralMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisGroupGeneralMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
