import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabGroupUserListDialogComponent } from './lab-group-user-list-dialog.component';

describe('LabGroupUserListDialogComponent', () => {
  let component: LabGroupUserListDialogComponent;
  let fixture: ComponentFixture<LabGroupUserListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGroupUserListDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabGroupUserListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
