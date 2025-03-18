import { Button } from '@mui/material'
import React from 'react'
import { getSpotifyAuthUrl } from '../../utils/auth'

const LoginButton = () => {

	const login = () => {
		getSpotifyAuthUrl();
	}

	return (
		<Button variant='contained' size='large' color='secondary' onClick={login}>
			Log in
		</Button>
	)
}

export default LoginButton