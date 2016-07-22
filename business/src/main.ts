import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms'
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyDqtCMYYOtF5kttoWhiQHoMSheqmxa_tBs",
    authDomain: "businesscontacts-d09cf.firebaseapp.com",
    databaseURL: "https://businesscontacts-d09cf.firebaseio.com",
    storageBucket: "businesscontacts-d09cf.appspot.com",
  }),
  provideForms(),
  disableDeprecatedForms()
]);

