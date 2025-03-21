import { useQuery } from "@tanstack/react-query"
import { getNewReleases } from "../apis/albumApi";
import { useAccessToken } from "./useAccessToken";

export const useGetNewReleases = () => {

	// client ID 를 통해 얻은 Token임
	const accessToken = useAccessToken();

	return useQuery({
		queryKey: ['new-releases'],
		queryFn: async () => {
			if (!accessToken) {
				throw new Error("No token available")
			}
			return getNewReleases(accessToken);
		}
	})
}