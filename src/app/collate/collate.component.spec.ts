import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateComponent } from './collate.component';

describe('CollateComponent', () => {
  let component: CollateComponent;
  let fixture: ComponentFixture<CollateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
