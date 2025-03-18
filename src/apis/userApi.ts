import axios from "axios";
import { spotifyBaseUrl } from "../configs/authConfig"
import { UserProfileType } from "../models/user";

export const getLoginUserProfile = async(userToken: string): Promise<UserProfileType> => {
    try {
        const url = `${spotifyBaseUrl}/me`;
        const response = await axios.get(
            url,
            {
				headers: {
					Authorization: `Bearer ${userToken}`
				}
			}
        )
        return response.data
    } catch (error) {
        throw new Error('fail to getLoginUserProfile')
    }
}