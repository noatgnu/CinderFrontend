import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedResultViewComponent } from './selected-result-view.component';

describe('SelectedResultViewComponent', () => {
  let component: SelectedResultViewComponent;
  let fixture: ComponentFixture<SelectedResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedResultViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
