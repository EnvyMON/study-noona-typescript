import { Outlet } from 'react-router'
import { Layout, SideBar, ContentBox, NavList, CustomNavLink } from './AppLayout.styles'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import LibraryHead from './components/LibraryHead';
import LibraryList from './components/LibraryList';
import NavBar from './components/NavBar';

const AppLayout = () => {
  return (
	<Layout>
		<SideBar>
			<ContentBox>
				<NavList>
					<CustomNavLink to={'/'}>
						<HomeIcon/>  
						<Typography variant='h2' fontWeight={'700'}>Home</Typography>
					</CustomNavLink>
					<CustomNavLink to={'/search'}>
						<SearchIcon/>
						<Typography variant='h2' fontWeight={'700'}>Search</Typography>
					</CustomNavLink>
				</NavList>
			</ContentBox>

			<ContentBox height={'100%'} sx={{marginTop: '8px'}}>
				<LibraryHead />
				<LibraryList />
			</ContentBox>

		</SideBar>

		<ContentBox>
			<NavBar />
			<Outlet />
		</ContentBox>
	</Layout>
  )
}

export default AppLayout