import { useInfiniteQuery } from "@tanstack/react-query"
import { GetPlaylistItemsRequestType } from "../models/playlist"
import { getPlaylistItems } from "../apis/playlistApi"


export const useGetPlaylistItems = (params: GetPlaylistItemsRequestType) => {
	return useInfiniteQuery({
		queryKey: ['useGetPlaylistItems', params],
		queryFn: async({pageParam}) => {
			return getPlaylistItems({offset: pageParam, ...params})
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage)=>{
			if (lastPage.next){
				const nextUrl = new URL(lastPage.next);  // next가 URL 문자열일 경우
				const nextOffset = nextUrl.searchParams.get('offset');  // offset 파라미터 추출
				return nextOffset ? parseInt(nextOffset) : null
			}
		},
		enabled: !!params.playlist_id
	})
}