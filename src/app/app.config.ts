import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import {provideRouter, withComponentInputBinding, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors, withXhr} from "@angular/common/http";
import {authInterceptor} from "./auth.interceptor";

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(
        routes,
        withHashLocation(),
        withComponentInputBinding()
      ),
      provideHttpClient(withXhr(),
        withInterceptors([authInterceptor])
      ),
      importProvidersFrom(PlotlyModule.forRoot(PlotlyJS))
    ]
};
