import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogRef } from '@angular/material/dialog';
import { LabGroupCreateDialogComponent } from './lab-group-create-dialog.component';

describe('LabGroupCreateDialogComponent', () => {
  let component: LabGroupCreateDialogComponent;
  let fixture: ComponentFixture<LabGroupCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGroupCreateDialogComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LabGroupCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
