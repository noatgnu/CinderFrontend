import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateHeaderComponent } from './collate-header.component';

describe('CollateHeaderComponent', () => {
  let component: CollateHeaderComponent;
  let fixture: ComponentFixture<CollateHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
