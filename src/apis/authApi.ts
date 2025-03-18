import axios from "axios"
import { Buffer } from "buffer";
import { appRedirectUri, clientID, clientSecret } from "../configs/authConfig";
import { ClientCredentialTokenResponseType, ExchangeTokenResponseType } from "../models/auth";

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

export const exchangeToken = async(code: string, codeVerifier: string): Promise<ExchangeTokenResponseType> => {
	try{

		const url = "https://accounts.spotify.com/api/token";
		const payload = new URLSearchParams({
			client_id: clientID,
			grant_type: 'authorization_code',
			code,
			redirect_uri: appRedirectUri,
			code_verifier: codeVerifier
		});
		const response = await axios.post(url, payload, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
		return response.data
	} catch (error) {
		throw new Error('fail to fetch Token')
	}

}