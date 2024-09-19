import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLabGroupComponent } from './user-lab-group.component';

describe('UserLabGroupComponent', () => {
  let component: UserLabGroupComponent;
  let fixture: ComponentFixture<UserLabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLabGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
