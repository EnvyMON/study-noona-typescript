import { useQuery } from "@tanstack/react-query"
import { getPlaylist } from "../apis/playlistApi"

export const useGetPlaylist = ({playlist_id}: {playlist_id: string | undefined}) => {
    return useQuery({
        queryKey: ['useGetPlaylist', playlist_id],
        queryFn: async()=>{
			if (playlist_id){
				return getPlaylist({playlist_id: playlist_id});
			}
        },
		enabled: !!playlist_id
    })
}