import axios from "axios"
import { spotifyBaseUrl } from "../configs/authConfig"
import { GetNewReleaseResponseType } from "../models/album"

export const getNewReleases = async (token: string): Promise<GetNewReleaseResponseType> => {
	try{
		const response = await axios.get(
			`${spotifyBaseUrl}/browse/new-releases?limit=6`, 
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		return response.data
	} catch (error) {
		throw new Error('Fail to fetch new release')
	}
}