import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateConditionOrderDialogComponent } from './collate-condition-order-dialog.component';

describe('CollateConditionOrderDialogComponent', () => {
  let component: CollateConditionOrderDialogComponent;
  let fixture: ComponentFixture<CollateConditionOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateConditionOrderDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateConditionOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
