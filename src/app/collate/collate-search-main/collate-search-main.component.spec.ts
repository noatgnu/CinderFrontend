import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateSearchMainComponent } from './collate-search-main.component';

describe('CollateSearchMainComponent', () => {
  let component: CollateSearchMainComponent;
  let fixture: ComponentFixture<CollateSearchMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateSearchMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateSearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
