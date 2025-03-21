import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { getAccessToken } from "../apis/authApi"
import { getLoginUserProfile } from "../apis/userApi"
import { UserProfileType } from "../models/user"

export const useGetLoginUserProfile = (): UseQueryResult<UserProfileType, Error> => {
	return useQuery({
		queryKey: ['login-user-profile'],
		queryFn: async () => {
            return getLoginUserProfile()
        }
	})
}