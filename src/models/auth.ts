export type ClientCredentialTokenResponseType = {
	access_token: string;
	token_type: string;
	expires_in: number;
}

export type ExchangeTokenResponseType = ClientCredentialTokenResponseType & {
	scope: string;
	refresh_token: string;
}	

export type ExchangeTokenInput = {
	code: string;
	codeVerifier: string;
}