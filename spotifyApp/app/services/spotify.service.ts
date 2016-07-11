import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  constructor(private _http: Http) {

  }

  searchMusic(searchString: string, type='artist') {
    this.searchUrl = `https://api.spotify.com/v1/search?query=${searchString}&offset=0&limit=20&type=${type}&market=US`;
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }

  getArtist(artistId:string) {
    return this._http.get(`https://api.spotify.com/v1/artists/${artistId}`).map(res => res.json());
  }

  getAlbum(albumId:string) {
    return this._http.get(`https://api.spotify.com/v1/albums/${albumId}`).map(res => res.json());
  }

  getAlbumsForArtist(artistId:string) {
    return this._http.get(`https://api.spotify.com/v1/artists/${artistId}/albums`).map(res => res.json());
  }
}
