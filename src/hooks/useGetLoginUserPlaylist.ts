import { useQuery } from "@tanstack/react-query"
import { useAccessToken } from "./useAccessToken";
import { getLoginUserPlaylist } from "../apis/userApi";

export const useGetLoginUserPlaylist = () => {
    const userToken = localStorage.getItem('access_token')
    return useQuery({
        queryKey: ['useGetLoginUserPlaylist'],
        queryFn: async () => {
            if (!userToken) {
                throw new Error("No token available")
            }
            return getLoginUserPlaylist(userToken);
        }
    })
}