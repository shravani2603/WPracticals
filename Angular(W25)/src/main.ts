import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// Steps to Run the code:
// open one terminal

// npm i

// npm i -D

// npm i -g json-server

// open 2 terminals in app

// terminal1: ng serve

// terminal2: json-server --watch db.json


