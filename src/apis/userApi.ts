import axios from "axios";
import { spotifyBaseUrl } from "../configs/authConfig"
import { UserProfileType } from "../models/user";
import { api } from "../utils/api";
import { GetLogtinUserPlaylistResponseType } from "../models/playlist";

export const getLoginUserProfile = async(): Promise<UserProfileType> => {
    try {
        const url = '/me';
        const response = await api.get(url)
        return response.data
    } catch (error) {
        throw new Error('fail to getLoginUserProfile')
    }
}

export const getLoginUserPlaylist = async(): Promise<GetLogtinUserPlaylistResponseType> => {
    try {
        const url = '/me/playlists';
        const response = await api.get(url)
        return response.data
    } catch (error) {
        throw new Error('fail to getLoginUserPlaylist')
    }
}

export const getLoginUserPlaylistInfinite = async({limit, offset}:{limit: number; offset: number}): Promise<GetLogtinUserPlaylistResponseType> => {
    try {
        const url = '/me/playlists';
        const response = await api.get(url, {
			params: {
				limit,
				offset
			}
		})
        return response.data
    } catch (error) {
        throw new Error('fail to getLoginUserPlaylistInfinite')
    }
}