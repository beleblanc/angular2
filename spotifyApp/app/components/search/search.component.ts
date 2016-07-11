import { Component } from '@angular/core';
import { FORM_DIRECTIVES, Control } from '@angular/common';
import {  ROUTER_DIRECTIVES} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
import { Artist } from '../../models/artist.model';
import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  searchControl: Control = new Control('');
  public artists: Artist[];

  constructor(private _spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.searchControl.valueChanges.debounceTime(1000).subscribe(val => {
      this._spotifyService.searchMusic(val).subscribe(res => this.artists = res.artists.items);
    });
  }
}


