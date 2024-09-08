import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateConditionColorEditorDialogComponent } from './collate-condition-color-editor-dialog.component';

describe('CollateConditionColorEditorDialogComponent', () => {
  let component: CollateConditionColorEditorDialogComponent;
  let fixture: ComponentFixture<CollateConditionColorEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateConditionColorEditorDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateConditionColorEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
