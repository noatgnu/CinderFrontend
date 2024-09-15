import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabGroupCreateDialogComponent } from './lab-group-create-dialog.component';

describe('LabGroupCreateDialogComponent', () => {
  let component: LabGroupCreateDialogComponent;
  let fixture: ComponentFixture<LabGroupCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabGroupCreateDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabGroupCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
