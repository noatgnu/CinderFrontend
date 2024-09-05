import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateSearchComponent } from './collate-search.component';

describe('CollateSearchComponent', () => {
  let component: CollateSearchComponent;
  let fixture: ComponentFixture<CollateSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
