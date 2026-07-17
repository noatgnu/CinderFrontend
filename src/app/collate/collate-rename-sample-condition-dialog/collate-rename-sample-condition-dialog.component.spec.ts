import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CollateRenameSampleConditionDialogComponent } from './collate-rename-sample-condition-dialog.component';

describe('CollateRenameSampleConditionDialogComponent', () => {
  let component: CollateRenameSampleConditionDialogComponent;
  let fixture: ComponentFixture<CollateRenameSampleConditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateRenameSampleConditionDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateRenameSampleConditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
