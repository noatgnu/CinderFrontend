import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExtraDataModalComponent } from './file-extra-data-modal.component';

describe('FileExtraDataModalComponent', () => {
  let component: FileExtraDataModalComponent;
  let fixture: ComponentFixture<FileExtraDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileExtraDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileExtraDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
