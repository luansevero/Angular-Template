import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideIcons } from '@ng-icons/core';
import { lucideCircleUser, lucideHouse, lucideSquareUser, lucideUserRound } from '@ng-icons/lucide';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideIcons({
      lucideHouse,
      lucideCircleUser
    }),
  ],
};