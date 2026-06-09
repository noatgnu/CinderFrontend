import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LabGroupUserListDialogComponent } from './lab-group-user-list-dialog.component';

describe('LabGroupUserListDialogComponent', () => {
  let component: LabGroupUserListDialogComponent;
  let fixture: ComponentFixture<LabGroupUserListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGroupUserListDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: { labGroupID: 0 } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LabGroupUserListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
