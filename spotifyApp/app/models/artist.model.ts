import {Album} from "./album.model";
export class Artist{
  genres: Array<string>;
  href: string;
  albums: Album[];
  id: string;
  name: string;
  popularity: Number;
  external_urls: any;
  followers: SpotifyFollowers;
  images: Array<SpotifyImage>;
  type:string;
  uri: string;

  constructor(parameters: Object) {
    Object.assign(this, parameters);
  }

  hasGenres():boolean {
    return this.genres.length > 0;
  }
}
