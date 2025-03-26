import { ApiResponseType, ImageObjectType } from "./apiResponse";

export type GetLogtinUserPlaylistRequestType = {
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

}

export type EpisodeObjectType = {

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