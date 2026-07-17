import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { AreYouSureDialogComponent } from './are-you-sure-dialog.component';

describe('AreYouSureDialogComponent', () => {
  let component: AreYouSureDialogComponent;
  let fixture: ComponentFixture<AreYouSureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreYouSureDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreYouSureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
