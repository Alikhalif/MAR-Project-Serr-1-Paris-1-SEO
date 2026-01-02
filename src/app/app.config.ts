import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { SITE_CONFIG_TOKEN } from './core/config/site-config.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideClientHydration(),
    {
      provide: SITE_CONFIG_TOKEN,
      useValue: {
        phone: '0757831800',
        phoneFormatted: '07 57 83 18 00',
        domain: 'https://www.serrurier-paris1.fr'
      }
    }
  ]
};
