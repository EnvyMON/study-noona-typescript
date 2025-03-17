import axios from "axios"
import { Buffer } from "buffer";
import { clientID, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponseType } from "../models/auth";

const encodedBase64 = (data: string): string => {
	return Buffer.from(data).toString('base64')
}

export const getAccessToken = async(): Promise<ClientCredentialTokenResponseType> => {
	try{
		const body = new URLSearchParams({
			grant_type: 'client_credentials'
		})
		const res = await axios.post(
			'https://accounts.spotify.com/api/token',
			body,
			{
				headers: {
					Authorization: `Basic ${encodedBase64(clientID + ':' + clientSecret)}`,
					"Content-Type": 'application/x-www-form-urlencoded'
				}
			}
		)

		return res.data

	} catch(error) {
		throw new Error('Fail to fetch Access Token')
	}
}