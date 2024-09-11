import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateQrCodeDialogComponent } from './collate-qr-code-dialog.component';

describe('CollateQrCodeDialogComponent', () => {
  let component: CollateQrCodeDialogComponent;
  let fixture: ComponentFixture<CollateQrCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateQrCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollateQrCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
