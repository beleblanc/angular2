import { provideRouter, RouterConfig} from '@angular/router';
import {AboutRoutes } from './components/about/about.routes'
import {SearchComponent} from "./components/search/search.component";
import {ArtistRoutes} from "./components/artist/artist.route";
import {AlbumRoutes} from "./components/album/album.routes";

export const routes: RouterConfig = [
  ...AboutRoutes,
  ...ArtistRoutes,
  ...AlbumRoutes,
  {path: '', component: SearchComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
