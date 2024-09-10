import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateTagCreateDialogComponent } from './collate-tag-create-dialog.component';

describe('CollateTagCreateDialogComponent', () => {
  let component: CollateTagCreateDialogComponent;
  let fixture: ComponentFixture<CollateTagCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateTagCreateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateTagCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
