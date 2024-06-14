import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSessionListComponent } from './search-session-list.component';

describe('SearchSessionListComponent', () => {
  let component: SearchSessionListComponent;
  let fixture: ComponentFixture<SearchSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSessionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
