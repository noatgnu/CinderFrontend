import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CollateSearchListDialogComponent } from './collate-search-list-dialog.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('CollateSearchListDialogComponent', () => {
  let component: CollateSearchListDialogComponent;
  let fixture: ComponentFixture<CollateSearchListDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<CollateSearchListDialogComponent>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [CollateSearchListDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: null },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CollateSearchListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count proteins correctly', () => {
    expect(component.getProteinCount('BRCA1\nTP53\nEGFR')).toBe(3);
    expect(component.getProteinCount('BRCA1,TP53,EGFR')).toBe(3);
    expect(component.getProteinCount('')).toBe(0);
  });

  it('should cancel dialog', () => {
    component.cancel();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });

  it('should close with data when filter selected', () => {
    const filter = { id: 1, name: 'Test List', data: 'BRCA1\nTP53', default: false };
    component.selectFilter(filter);
    expect(mockDialogRef.close).toHaveBeenCalledWith('BRCA1\nTP53');
  });
});
