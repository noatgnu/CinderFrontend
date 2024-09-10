import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateTagsComponent } from './collate-tags.component';

describe('CollateTagsComponent', () => {
  let component: CollateTagsComponent;
  let fixture: ComponentFixture<CollateTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
