import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolcanoPlotComponent } from './volcano-plot.component';

describe('VolcanoPlotComponent', () => {
  let component: VolcanoPlotComponent;
  let fixture: ComponentFixture<VolcanoPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolcanoPlotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolcanoPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
