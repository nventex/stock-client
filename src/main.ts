import "./polyfills.ts";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";
import { AppModule } from "./app/app.module";

if (environment.production) {
  enableProdMode();
}

// my original code
window.setTimeout(() => {
  platformBrowserDynamic().bootstrapModule(AppModule);
}, 0);

// added workaround
if (false) {
  platformBrowserDynamic().bootstrapModule(AppModule);
}