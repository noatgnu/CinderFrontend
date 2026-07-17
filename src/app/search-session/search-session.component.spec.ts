import { ComponentFixture, TestBed } from '@angular/core/testing';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { SearchSessionComponent } from './search-session.component';

describe('SearchSessionComponent', () => {
  let component: SearchSessionComponent;
  let fixture: ComponentFixture<SearchSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSessionComponent],
      providers: [
        provideHttpClient(withXhr()),
        provideHttpClientTesting(),
        provideRouter([]),
        importProvidersFrom(PlotlyModule.forRoot(PlotlyJS)),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
