import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CreateCollateDialogComponent } from './create-collate-dialog.component';

describe('CreateCollateDialogComponent', () => {
  let component: CreateCollateDialogComponent;
  let fixture: ComponentFixture<CreateCollateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCollateDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
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
