import { Box, styled } from '@mui/material'
import { NavLink } from 'react-router'

export const Layout = styled('div')({
	display: 'flex',
	height: '100vh',
	padding: '8px'
})

export const SideBar = styled('div')(({ theme })=>({
	display: 'flex',
	width: '331px',
	height: '100%',
	flexDirection: 'column',
	[theme.breakpoints.down('sm')]: {
		display: 'none'
	},
	marginRight: '8px'
}))

export const ContentBox = styled(Box)(({ theme })=>({
	borderRadius: '8px',
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.primary,
	width: '100%',
	padding: '30px',
	// marginBottom: '8px',
	paddingLeft: '20px',
	paddingRight: '20px',
	
}))

export const NavList = styled('ul')({
	listStyle: 'none',
	padding: 0,
	margin: 0,
	display: 'flex', // Flexbox 적용
  	flexDirection: 'column', // 세로 정렬
  	gap: '10px', // 내부 요소 간격
})

export const CustomNavLink = styled(NavLink)(({theme})=>({
	display: 'flex',
	textDecoration: 'none',
	alignItems: 'center',
	gap: '20px',
	color: theme.palette.text.secondary,
	'&:hover': {
		color: theme.palette.text.primary
	},
	'&.active': {
		color: theme.palette.text.primary
	}

}))