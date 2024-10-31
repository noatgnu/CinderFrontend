import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateRenameSampleConditionDialogComponent } from './collate-rename-sample-condition-dialog.component';

describe('CollateRenameSampleConditionDialogComponent', () => {
  let component: CollateRenameSampleConditionDialogComponent;
  let fixture: ComponentFixture<CollateRenameSampleConditionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateRenameSampleConditionDialogComponent]
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
