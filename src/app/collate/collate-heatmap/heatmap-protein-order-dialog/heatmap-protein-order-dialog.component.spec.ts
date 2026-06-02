import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { HeatmapProteinOrderDialogComponent } from './heatmap-protein-order-dialog.component';
import { HeatmapDataPoint } from '../collate-heatmap.types';

describe('HeatmapProteinOrderDialogComponent', () => {
  let component: HeatmapProteinOrderDialogComponent;
  let fixture: ComponentFixture<HeatmapProteinOrderDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<HeatmapProteinOrderDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [HeatmapProteinOrderDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapProteinOrderDialogComponent);
    component = fixture.componentInstance;
    component.allProteins = ['TP53', 'BRCA1', 'EGFR', 'KRAS'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize currentOrder from allProteins', () => {
    expect(component.currentOrder).toEqual(['TP53', 'BRCA1', 'EGFR', 'KRAS']);
  });

  it('should sort by comparison ascending', () => {
    const testData: HeatmapDataPoint[] = [
      { protein: 'TP53', log2fc: 2.0, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
      { protein: 'BRCA1', log2fc: 1.5, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
      { protein: 'EGFR', log2fc: 3.0, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
    ];
    component.allHeatmapData = testData;
    component.selectedComparison = 'control_vs_treated';
    component.sortDirection = 'asc';
    component.sortByComparison();
    expect(component.currentOrder).toEqual(['BRCA1', 'TP53', 'EGFR', 'KRAS']);
  });

  it('should sort by comparison descending', () => {
    const testData: HeatmapDataPoint[] = [
      { protein: 'TP53', log2fc: 2.0, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
      { protein: 'BRCA1', log2fc: 1.5, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
      { protein: 'EGFR', log2fc: 3.0, comparison: 'control_vs_treated', project: 'p1', analysis_group: 'ag1', conditionA: 'control', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
    ];
    component.allHeatmapData = testData;
    component.selectedComparison = 'control_vs_treated';
    component.sortDirection = 'desc';
    component.sortByComparison();
    expect(component.currentOrder).toEqual(['EGFR', 'TP53', 'BRCA1', 'KRAS']);
  });

  it('should apply bulk order with comma-separated names', () => {
    component.bulkText = 'EGFR, TP53, BRCA1';
    component.applyBulkOrder();
    expect(component.currentOrder).toEqual(['EGFR', 'TP53', 'BRCA1', 'KRAS']);
  });

  it('should apply bulk order with newline-separated names', () => {
    component.bulkText = 'EGFR\nTP53\nBRCA1';
    component.applyBulkOrder();
    expect(component.currentOrder).toEqual(['EGFR', 'TP53', 'BRCA1', 'KRAS']);
  });

  it('should handle case-insensitive bulk order', () => {
    component.bulkText = 'egfr\ntp53';
    component.applyBulkOrder();
    expect(component.currentOrder).toEqual(['EGFR', 'TP53', 'BRCA1', 'KRAS']);
  });

  it('should reset to original order', () => {
    component.currentOrder = ['EGFR', 'BRCA1'];
    component.reset();
    expect(component.currentOrder).toEqual(['TP53', 'BRCA1', 'EGFR', 'KRAS']);
  });

  it('should save and close dialog', () => {
    component.currentOrder = ['EGFR', 'BRCA1', 'TP53', 'KRAS'];
    component.save();
    expect(mockDialogRef.close).toHaveBeenCalledWith(['EGFR', 'BRCA1', 'TP53', 'KRAS']);
  });

  it('should cancel dialog without saving', () => {
    component.cancel();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });
});
