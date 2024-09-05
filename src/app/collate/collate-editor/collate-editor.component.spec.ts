import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateEditorComponent } from './collate-editor.component';

describe('CollateEditorComponent', () => {
  let component: CollateEditorComponent;
  let fixture: ComponentFixture<CollateEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollateEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
