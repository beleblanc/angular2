import { Component, OnInit } from '@angular/core';
import {CanActivate, Router, ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router'
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist.model";
import {Album} from "../../models/album.model";
import {Subscription} from "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: './artist.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ArtistComponent implements CanActivate , OnInit{
  id: string;
  artist: Artist;
  albums: Album[];
  sub: Subscription;
  constructor(
    private _spotifyService: SpotifyService,
    private _router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this._spotifyService.getArtist(this.id).subscribe(res => {
        this.artist = new Artist(res);
        this._spotifyService.getAlbumsForArtist(this.id).subscribe(res => {
          this.albums = Album.fromArray(res.items);
          console.log(this.albums);
        });

      });
    });
  }

  canActivate() {
    return true;
  }
}
