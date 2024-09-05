import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateViewComponent } from './collate-view.component';

describe('CollateViewComponent', () => {
  let component: CollateViewComponent;
  let fixture: ComponentFixture<CollateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
