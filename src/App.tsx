
import { Route, Routes } from 'react-router'
import './App.css'
import React, { Suspense } from 'react';
import LoadingSpinner from './common/components/LoadingSpinner';

const AppLayout = React.lazy(() => import('./layout/AppLayout'));
const SearchPage = React.lazy(() => import('./page/SearchPage/SearchPage'));
const HomePage = React.lazy(() => import('./page/HomePage/HomePage'));

function App() {

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
