export class Album {
  id: string;
  album_type: string;
  available_markets: Array<string>;
  href: string;
  images: Array<SpotifyImage>;
  name: string;
  type: string;
  uri: string;

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
}
