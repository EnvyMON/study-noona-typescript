import { useQuery } from "@tanstack/react-query"
import { getPlaylist } from "../apis/playlistApi"

export const useGetPlaylist = ({playlist_id}: {playlist_id: string}) => {
    return useQuery({
        queryKey: ['useGetPlaylist', playlist_id],
        queryFn: async()=>{
            return getPlaylist({playlist_id: playlist_id});
        }
    })
}