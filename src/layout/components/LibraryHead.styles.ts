import { Box, styled } from "@mui/material"

export const ContentBox = styled(Box)(({ theme })=>({
	borderRadius: '8px',
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.primary,
	width: '100%',
	padding: '8px',
	// height: '100%'
}))

export const YouLibraryBox = styled(Box)(({ theme })=>({
	display: 'flex',
	color: theme.palette.text.primary,
	width: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '15px',
	marginTop: '10px'
}))