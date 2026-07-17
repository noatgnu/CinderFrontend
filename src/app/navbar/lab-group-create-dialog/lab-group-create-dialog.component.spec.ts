import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { LabGroupCreateDialogComponent } from './lab-group-create-dialog.component';

describe('LabGroupCreateDialogComponent', () => {
  let component: LabGroupCreateDialogComponent;
  let fixture: ComponentFixture<LabGroupCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGroupCreateDialogComponent],
      providers: [
        provideHttpClient(withXhr()),
        provideHttpClientTesting(),
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
