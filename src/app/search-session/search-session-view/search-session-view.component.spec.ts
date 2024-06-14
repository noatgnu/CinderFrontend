import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSessionViewComponent } from './search-session-view.component';

describe('SearchSessionViewComponent', () => {
  let component: SearchSessionViewComponent;
  let fixture: ComponentFixture<SearchSessionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSessionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSessionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
