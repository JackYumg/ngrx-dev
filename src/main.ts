import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootloader, hmrModule } from '@angularclass/hmr';
import { mockStart } from './../mock/index';
if (environment.production) {
  enableProdMode();
}
if (!environment.production) {
  mockStart();
}

function main() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then((ngModuleRef: any) => {
      // `module` global ref for webpackhmr
      // Don't run this in Prod
      return hmrModule(ngModuleRef, module);
    })
    .catch(err => console.error(err));
}

bootloader(main);
