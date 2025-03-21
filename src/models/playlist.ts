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