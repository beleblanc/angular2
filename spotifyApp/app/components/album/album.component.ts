import { Component, OnInit } from '@angular/core';
import {CanActivate, Router, ActivatedRoute} from '@angular/router'
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../models/artist.model";
import {Album} from "../../models/album.model";
import {Subscription} from "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements CanActivate , OnInit{
  id: string;
  album: Album;
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
      this._spotifyService.getAlbum(this.id).subscribe(res => {
          this.album = new Album(res);
      });
    });
  }

  canActivate() {
    return true;
  }
}
