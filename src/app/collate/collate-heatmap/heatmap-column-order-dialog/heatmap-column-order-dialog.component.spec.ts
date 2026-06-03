import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { HeatmapColumnOrderDialogComponent } from './heatmap-column-order-dialog.component';

describe('HeatmapColumnOrderDialogComponent', () => {
  let component: HeatmapColumnOrderDialogComponent;
  let fixture: ComponentFixture<HeatmapColumnOrderDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<HeatmapColumnOrderDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [HeatmapColumnOrderDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapColumnOrderDialogComponent);
    component = fixture.componentInstance;
    component.columnGroups = [
      { project: 'ProjectA', labels: ['ctrl_vs_treated', 'ctrl_vs_vehicle'] },
      { project: 'ProjectB', labels: ['pre_vs_post'] },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize groups from input', () => {
    expect(component.groups.length).toBe(2);
    expect(component.groups[0].labels).toEqual(['ctrl_vs_treated', 'ctrl_vs_vehicle']);
  });

  it('should reset group to sorted order', () => {
    component.groups[0].labels = ['ctrl_vs_vehicle', 'ctrl_vs_treated'];
    component.reset(0);
    expect(component.groups[0].labels).toEqual(['ctrl_vs_treated', 'ctrl_vs_vehicle']);
  });

  it('should save and close with result', () => {
    component.save();
    expect(mockDialogRef.close).toHaveBeenCalledWith({
      ProjectA: ['ctrl_vs_treated', 'ctrl_vs_vehicle'],
      ProjectB: ['pre_vs_post'],
    });
  });

  it('should cancel without result', () => {
    component.cancel();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });
});
