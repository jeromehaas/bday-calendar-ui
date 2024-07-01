// IMPORTS
import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";

// APP-CONFIG
export const appConfig: ApplicationConfig = {
    providers: [
        HttpClientModule,
        provideRouter(routes),
        provideHttpClient(),
    ]
};
