import { provideRouter, RouterConfig} from '@angular/router';
import {AboutRoutes } from './components/about/about.routes'
import {SearchComponent} from "./components/search/search.component";

export const routes: RouterConfig = [
  ...AboutRoutes,
  {path: '', component: SearchComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
