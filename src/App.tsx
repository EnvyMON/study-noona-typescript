
import { Route, Routes } from 'react-router'
import './App.css'
import React, { Suspense, useEffect } from 'react';
import LoadingSpinner from './common/components/LoadingSpinner';
import { appRedirectUri, clientID } from './configs/authConfig';
import { useExchangeToken } from './hooks/useExchangeToken';
import { useMutation } from '@tanstack/react-query';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const SearchPage = React.lazy(() => import('./page/SearchPage/SearchPage'));
const HomePage = React.lazy(() => import('./page/HomePage/HomePage'));

function App() {

	const urlParams = new URLSearchParams(window.location.search);
	let code = urlParams.get('code');
	const codeVerifier = localStorage.getItem('code_verifier');
	const { mutate } = useExchangeToken();

	useEffect(()=>{
		if (code && codeVerifier){
			mutate({code: code, codeVerifier: codeVerifier});
		}
	}, [code, codeVerifier, mutate])
	  


	return (
		<Suspense fallback={<LoadingSpinner />}>
			<Routes>
				{/* <Route path='/loading' element={<LoadingSpinner />}></Route> */}
				<Route path='/' element={<AppLayout />} >
					<Route index element={<HomePage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}	

export default App
