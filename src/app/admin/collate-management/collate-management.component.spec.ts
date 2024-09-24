import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateManagementComponent } from './collate-management.component';

describe('CollateManagementComponent', () => {
  let component: CollateManagementComponent;
  let fixture: ComponentFixture<CollateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
