import { Box, Button, styled, Typography } from "@mui/material"

export const ContentBox = styled(Box)(({ theme })=>({
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '20px',
	backgroundColor: '#1E1E1E',
	color: theme.palette.text.primary,
	width: '100%',
	padding: '25px',
	// alignItems: 'center'
	marginTop: '10px'
}))

const CreatePlaylistButton = styled(Button)({
	fontWeight: '700',
	width: '150px',
	marginTop: '20px',
	padding: '10px'
})


const EmptyPlayList = () => {
  return (
	<ContentBox>
		<Typography sx={{fontSize: '15px', fontWeight: 'bold'}}>Create your first playlist</Typography>
		<Typography variant='body1'>it's easy. we'll help you</Typography>
		<CreatePlaylistButton variant="contained" color="secondary" sx={{fontSize: '12pt'}}>
			Create playlist
		</CreatePlaylistButton>
	</ContentBox>
  )
}

export default EmptyPlayList