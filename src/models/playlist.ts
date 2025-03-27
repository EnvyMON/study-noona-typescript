import { SimplifiedAlbumObjectType, SimplifiedArtistObjectType } from "./album";
import { ApiResponseType, ImageObjectType } from "./apiResponse";

export type GetLoginUserPlaylistRequestType = {
	limit?: number;
	offset?: number;
}

export type GetLogtinUserPlaylistResponseType = ApiResponseType<SimplifiedPlaylistObjectType>

export type SimplifiedPlaylistObjectType = {
	collaborative?: boolean;
	description?: string;
	external_urls?: {
		spotify?: string;
	};
	href?: string;
	id?: string;
	images?: ImageObjectType[];
	name?: string;
	owner?: {
		external_urls?: {
			spotify?: string;
		},
		followers?: {
			href?: string | null,
			total?: number
		},
		href?: string;
		id?: string;
		type?: string;
		uri?: string;
		display_name?: string | null;
	};
	public?: boolean;
	snapshot_id?: string;
	tracks?: {
		href?: string;
		total?: number;
	};
	type?: string;
	uri?: string;
}

export type TrackObjectType = {
	album?: SimplifiedAlbumObjectType;
	artists?: SimplifiedArtistObjectType;
	available_markets?: string[];
	disc_number?: number;
	duration_ms?: number;
	explicit?: boolean;
	external_ids?: {
		isrc?: string;
		ean?: string;
		upc?: string;
	};
	external_urls?: {
		spotify?: string;
	};
	href?: string;
	id?: string;
	is_playable?: boolean;
	linked_from?: TrackObjectType;
	restrictions?: {
		reason?: string;
	}
	name?: string;
	popularity?: number;
	preview_url?: string | null;
	track_number?: number;
	type?: string;
	uri?: string;
	is_local?: boolean;
}

export type EpisodeObjectType = {
	audio_preview_url?: string | null;
	dexcription: string;
	hrml_description: string;
	duration_ms: number;
	explicit: boolean;
	external_urls: {
		spotify?: string;
	};
	href: string;
	id: string;
	images: ImageObjectType[];
	is_externally_hosred: boolean;
	is_playable: boolean;
	language?: string;
	languages: string[];
	name: string;
	release_date: string;
	release_date_precision: string;
	resume_point?: {
		fully_played?: boolean;
		resume_position_ms?: number;
	}
	type: string;
	uri: string;
	restrictions?: {
		reason?: string;
	}
	show: {
		available_markets: string[];
		copyrights: CopyrightObjectType[];
		description: string;
		html_description: string;
		explicit: boolean;
		external_urls: {
			spotify?: string;
		}
		href: string;
		id: string;
		images: ImageObjectType[];
		is_externally_hosted: boolean;
		languages: string[];
		media_type: string;
		name: string;
		publisher: string;
		type: string;
		uri: string;
		total_episodes: number;
	}
}

export type CopyrightObjectType = {
	text?: string;
	type?: string;
}

export type PlaylistTrackObjectType = {
	added_at?: string | null;
	added_by?: {
		external_urls?: {
			spotify: string;
		};
		followers?: {
			href: string | null;
			total: number;
		};
		href?: string;
		id?: string;
		type?: string;
		uri?: string;
	} | null;
	is_local?: boolean;
	track?: TrackObjectType | EpisodeObjectType
}

export type GetPlayListResponseType = {
	collaborative?: boolean;
	description?: string | null;
	external_urls?: {
		spotify: string;
	};
	followers?: {
		href: string | null;
		total: number;
	};
	href?: string;
	id?: string;
	images?: ImageObjectType[];
	name?: string;
	owner?: {
		external_urls: {
			spotify: string;
		};
		followers?: {
			href: string | null;
			total: number;
		};
		href?: string;
		id?: string;
		type?: string;
		uri?: string;
		display_name?: string | null;
	};
	public?: boolean;
	snapshot_id?: string;
	tracks?: {
		href: string;
		limit: number;
		next: string | null;
		offset: number;
		previous: string | null;
		total: number;
		items: PlaylistTrackObjectType[];
	};
	type?: string;
	uri?: string;
}

export type GetPlaylistItemsRequestType = {
	playlist_id: string;
	market?: string;
	fields?: string;
	limit?: number;
	offset?: number;
	additional_types?: string;
}

export type GetPlayListItemsResponseType = ApiResponseType<PlaylistTrackObjectType>