import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { EditUserDialogComponent } from './edit-user-dialog.component';
import { User } from '../../../user/user';

describe('EditUserDialogComponent', () => {
  let component: EditUserDialogComponent;
  let fixture: ComponentFixture<EditUserDialogComponent>;

  const mockUser: User = { id: 1, username: 'testuser', is_staff: false, first_name: 'Test', last_name: 'User', email: 'test@example.com' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: mockUser },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
