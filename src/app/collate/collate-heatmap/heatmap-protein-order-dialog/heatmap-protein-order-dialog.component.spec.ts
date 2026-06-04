import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeatmapProteinOrderDialogComponent } from './heatmap-protein-order-dialog.component';
import { HeatmapDataPoint } from '../collate-heatmap.types';

const mockProteins = ['TP53', 'BRCA1', 'EGFR', 'KRAS'];
const mockData: HeatmapDataPoint[] = [
  { protein: 'TP53', log2fc: 2.0, comparison: 'ctrl_vs_treated', project: 'p1', project_id: 1, analysis_group: 'ag1', analysis_group_id: 1, conditionA: 'ctrl', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
  { protein: 'BRCA1', log2fc: 1.5, comparison: 'ctrl_vs_treated', project: 'p1', project_id: 1, analysis_group: 'ag1', analysis_group_id: 1, conditionA: 'ctrl', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
  { protein: 'EGFR', log2fc: 3.0, comparison: 'ctrl_vs_treated', project: 'p1', project_id: 1, analysis_group: 'ag1', analysis_group_id: 1, conditionA: 'ctrl', conditionB: 'treated', p_value: 0.01, searchTerm: 'test' },
];

describe('HeatmapProteinOrderDialogComponent', () => {
  let component: HeatmapProteinOrderDialogComponent;
  let fixture: ComponentFixture<HeatmapProteinOrderDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<HeatmapProteinOrderDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [HeatmapProteinOrderDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { allProteins: mockProteins, allHeatmapData: mockData } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapProteinOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize currentOrder from allProteins', () => {
    expect(component.currentOrder).toEqual(['TP53', 'BRCA1', 'EGFR', 'KRAS']);
  });

  it('should sort by comparison ascending', () => {
    component.selectedComparison = 'ctrl_vs_treated';
    component.sortDirection = 'asc';
    component.sortByComparison();
    expect(component.currentOrder).toEqual(['BRCA1', 'TP53', 'EGFR', 'KRAS']);
  });

  it('should sort by comparison descending', () => {
    component.selectedComparison = 'ctrl_vs_treated';
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
