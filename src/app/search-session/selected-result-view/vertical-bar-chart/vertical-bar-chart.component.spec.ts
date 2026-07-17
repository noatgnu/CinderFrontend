import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { VerticalBarChartComponent } from './vertical-bar-chart.component';

describe('VerticalBarChartComponent', () => {
  let component: VerticalBarChartComponent;
  let fixture: ComponentFixture<VerticalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalBarChartComponent],
      providers: [
        importProvidersFrom(PlotlyModule.forRoot(PlotlyJS)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
