import { RouterConfig } from '@angular/router';
import {AlbumComponent} from "./album.component";
export const AlbumRoutes: RouterConfig = [
  {path: 'album/:id', component: AlbumComponent}
];
