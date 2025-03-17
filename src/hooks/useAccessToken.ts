import { useQuery } from "@tanstack/react-query"
import { getAccessToken } from "../apis/authApi"

export const useAccessToken = () => {
	const {data} = useQuery({
		queryKey: ['client-credential=token'],
		queryFn: getAccessToken
	})
	const accessToken = data?.access_token;
	return accessToken;
}