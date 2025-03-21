import { useMutation } from "@tanstack/react-query"
import { exchangeToken } from "../apis/authApi"
import { ExchangeTokenInput, ExchangeTokenResponseType } from "../models/auth"
import { api } from "../utils/api"

export const useExchangeToken= () => {
    return useMutation<ExchangeTokenResponseType, Error, ExchangeTokenInput>({
        mutationKey: ['exchangeToken'],
        mutationFn: ( {code, codeVerifier} )=> exchangeToken(code, codeVerifier)
        ,onSuccess: (data) => {
            localStorage.setItem('access_token', data.access_token);
        }
        ,onError: (error) => {
            throw new Error(`fail to useExchangeToken / ${error.message}`)
        }
    })
}