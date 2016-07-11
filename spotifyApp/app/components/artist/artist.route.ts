import { RouterConfig } from '@angular/router';
import { AboutComponent } from './about.component';
import {ArtistComponent} from "./artist.component";
export const ArtistRoutes: RouterConfig = [
  {path: 'artist/:id', component: ArtistComponent}
];
