export type GetNewReleaseResponseType = {
    albums: {
        href: string;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
        items: SimplifiedAlbumObjectType[];
    };
};
  
export type SimplifiedAlbumObjectType = {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
        spotify?: string;
    };
    href: string;
    id: string;
    images: ImageObjectType[];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: {
        reason?: string;
    };
    type: string;
    uri: string;
    artists: SimplifiedArtistObjectType[];
};
  
type ImageObjectType = {
    url: string;
    height: number | null;
    width: number | null;
};
  
type SimplifiedArtistObjectType = {
    external_urls?: {
        spotify?: string;
    };
    href?: string;
    id?: string;
    name?: string;
    type?: string;
    uri?: string;
};
  