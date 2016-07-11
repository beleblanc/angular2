import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http'
import { SpotifyService } from './services/spotify.service';
import {ArtistComponent} from "./components/artist/artist.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [SpotifyService, HTTP_PROVIDERS, ArtistComponent ],
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  constructor(private _router: Router) {

  }
}
