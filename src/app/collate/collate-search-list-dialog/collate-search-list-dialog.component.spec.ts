import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CollateSearchListDialogComponent } from './collate-search-list-dialog.component';
import { CurtainList } from '../../curtain-list.service';

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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CollateSearchListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close with data when filter selected', () => {
    const filter: CurtainList = { id: 1, name: 'Test', data: 'BRCA1\nTP53', default: false };
    component.selectFilter(filter);
    expect(mockDialogRef.close).toHaveBeenCalledWith('BRCA1\nTP53');
  });

  it('should cancel without result', () => {
    component.cancel();
    expect(mockDialogRef.close).toHaveBeenCalledWith();
  });

  it('should paginate correctly', () => {
    component.filters = Array.from({ length: 25 }, (_, i) => ({ id: i, name: `List ${i}`, data: '', default: false }));
    expect(component.totalPages).toBe(3);
    expect(component.pagedFilters.length).toBe(10);
    component.nextPage();
    expect(component.currentPage).toBe(1);
    component.prevPage();
    expect(component.currentPage).toBe(0);
  });
});
