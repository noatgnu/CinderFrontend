import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCollateDialogComponent } from './create-collate-dialog.component';

describe('CreateCollateDialogComponent', () => {
  let component: CreateCollateDialogComponent;
  let fixture: ComponentFixture<CreateCollateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCollateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCollateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
