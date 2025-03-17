import { useQuery } from "@tanstack/react-query"
import { getNewReleases } from "../apis/albumApi";
import { useAccessToken } from "./useAccessToken";

export const useGetNewReleases = () => {

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