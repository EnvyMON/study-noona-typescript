import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getAccessToken } from "../apis/authApi"
import { getLoginUserProfile } from "../apis/userApi"
import { UserProfileType } from "../models/user"

export const userGetLoginUserProfile = (): UseQueryResult<UserProfileType, Error> => {
    const userToken = localStorage.getItem('access_token')
	return useQuery({
		queryKey: ['login-user-profile'],
		queryFn: async () => {
            if (!userToken) {
                throw new Error('No access token available');
            }
            return getLoginUserProfile(userToken)
        },
        enabled: !!userToken 
	})
}