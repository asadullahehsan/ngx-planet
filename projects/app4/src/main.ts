import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineApplication, PlanetPortalApplication } from 'ngx-planet';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

defineApplication('app4', {
  template: `<app4-root></app4-root>`,
  bootstrap: (portalApp: PlanetPortalApplication) => {
      return platformBrowserDynamic([
          {
              provide: PlanetPortalApplication,
              useValue: portalApp
          },          
      ])
          .bootstrapModule(AppModule)
          .then(appModule => {
              return appModule;
          })
          .catch(error => {
              console.error(error);
              return null;
          });
  }
});

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
