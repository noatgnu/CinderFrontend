import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateProjectListComponent } from './collate-project-list.component';

describe('CollateProjectListComponent', () => {
  let component: CollateProjectListComponent;
  let fixture: ComponentFixture<CollateProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateProjectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
