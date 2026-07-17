import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { CollateYaxisScaleDialogComponent } from './collate-yaxis-scale-dialog.component';

describe('CollateYaxisScaleDialogComponent', () => {
  let component: CollateYaxisScaleDialogComponent;
  let fixture: ComponentFixture<CollateYaxisScaleDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<CollateYaxisScaleDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [CollateYaxisScaleDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateYaxisScaleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to automatic scaling', () => {
    expect(component.form.value.yAxisMode).toBe('auto');
  });

  it('should patch form values from the settings input', () => {
    component.settings = { yAxisMode: 'manual', yAxisMin: 1, yAxisMax: 5 };
    expect(component.form.value).toEqual({ yAxisMode: 'manual', yAxisMin: 1, yAxisMax: 5 });
  });

  it('should close with the form value on submit', () => {
    component.form.setValue({ yAxisMode: 'manual', yAxisMin: 2, yAxisMax: 10 });
    component.submit();
    expect(mockDialogRef.close).toHaveBeenCalledWith({ yAxisMode: 'manual', yAxisMin: 2, yAxisMax: 10 });
  });

  it('should close without a result on cancel', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });
});
