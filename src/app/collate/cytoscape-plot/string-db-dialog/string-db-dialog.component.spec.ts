import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { StringDbDialogComponent } from './string-db-dialog.component';

describe('StringDbDialogComponent', () => {
  let component: StringDbDialogComponent;
  let fixture: ComponentFixture<StringDbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringDbDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringDbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
