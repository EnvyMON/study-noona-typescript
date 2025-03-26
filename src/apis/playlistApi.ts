import { GetPlayListResponseType } from "../models/playlist";
import { api } from "../utils/api"

export const getPlaylist = async({playlist_id}: {playlist_id: string}): Promise<GetPlayListResponseType> => {
    try {
        const url = `/playlists/${playlist_id}`;
        const response = await api.get(url);
        return response.data
    } catch (error) {
        throw new Error(`fail to getPlaylist. ${playlist_id}`)
    }
}