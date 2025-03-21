import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { useAccessToken } from "./useAccessToken";
import { getLoginUserPlaylist, getLoginUserPlaylistInfinite } from "../apis/userApi";
import { GetLogtinUserPlaylistResponseType } from "../models/playlist";

export const useGetLoginUserPlaylist = () => {
    return useQuery({
        queryKey: ['useGetLoginUserPlaylist'],
        queryFn: async () => {
            return getLoginUserPlaylist();
        }
    })
}

type GetLoginUserPalylistRequest = {
	limit: number;
	offset: number;
}
export const useGetLoginUserPlaylistInfinite = ({limit, offset}: GetLoginUserPalylistRequest) => {
    return useInfiniteQuery({
        queryKey: ['useGetLoginUserPlaylistInfinite'],
        queryFn: async ({pageParam}) => {
            return getLoginUserPlaylistInfinite({limit, offset: pageParam});
        },
		initialPageParam: 0,
		getNextPageParam: (lastPage)=>{
			if (lastPage.next){
				const nextUrl = new URL(lastPage.next);  // next가 URL 문자열일 경우
				const nextOffset = nextUrl.searchParams.get('offset');  // offset 파라미터 추출
				return nextOffset ? parseInt(nextOffset) : null
			}
		}
    })
	
}