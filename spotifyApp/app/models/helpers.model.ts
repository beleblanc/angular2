class SpotifyImage {
  height: number;
  width: number;
  url: string;
}


class SpotifyFollowers {
  href: string;
  total: number;
}

class Paging {
  href: string;
  items: Array<Object>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
