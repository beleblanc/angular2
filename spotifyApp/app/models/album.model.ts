import {Artist} from "./artist.model";
export class Album {
  id: string;
  album_type: string;
  available_markets: Array<string>;
  href: string;
  images: Array<SpotifyImage>;
  name: string;
  type: string;
  uri: string;
  tracks: any;
  release_date: string;
  artists: Array<Artist>;

  constructor(properties:Object) {
    Object.assign(this, properties);
  }

  static fromArray(array:Array<Object>) {
    const tempArray: Album[] = [];
    array.forEach(album => {
      tempArray.push(new Album(album));
    });
    return tempArray;
  }

  getTracks() {
      return this.tracks.items;
  }

  hasTracks() {
    return this.tracks && this.tracks.items.length > 0;
  }

  hasArtist() {
    return this.artists.length > 0;
  }
}
