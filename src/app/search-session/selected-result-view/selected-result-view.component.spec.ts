import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { SelectedResultViewComponent } from './selected-result-view.component';

describe('SelectedResultViewComponent', () => {
  let component: SelectedResultViewComponent;
  let fixture: ComponentFixture<SelectedResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedResultViewComponent],
      providers: [
        provideAnimationsAsync(),
        importProvidersFrom(PlotlyModule.forRoot(PlotlyJS)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectedResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
