import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapePlotComponent } from './cytoscape-plot.component';

describe('CytoscapePlotComponent', () => {
  let component: CytoscapePlotComponent;
  let fixture: ComponentFixture<CytoscapePlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CytoscapePlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CytoscapePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
