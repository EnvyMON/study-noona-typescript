import { Avatar, Box, styled, Typography } from '@mui/material';
import React from 'react'

const ContentBox = styled(Box)(({ theme })=>({
	display: 'flex',
	alignItems: 'center',
	// flexDirection: 'column',
	// border: '1px solid white',
	color: theme.palette.text.primary,
	maxWidth: '291px',
	cursor: 'pointer',
	borderRadius: '8px',
	"&:hover": {
		backgroundColor: theme.palette.action.hover,
	},
	"&.active": {
		backgroundColor: "rgba(29, 185, 84, 0.2)",
	},

}))

type PlaylistItemProps = {
	playlistId?: string;
	playlistImg: string | null;
	title: string | null;
	ownerName: string | null;
	type: string;
	handleOnClick: (id?: string) => void;
	isActive: boolean
}

const PlaylistItem = ({playlistImg, title, ownerName, type, playlistId, handleOnClick, isActive}: PlaylistItemProps) => {
	return (
		<ContentBox onClick={()=>handleOnClick(playlistId)} className={isActive ? 'active' : ''}>
			{
				playlistImg ? (
					<Avatar src={playlistImg} alt="이미지 설명" variant="square" sx={{ width: '70px', height: '74px', borderRadius: '8px' }}/>
				) : (
					<Box sx={{width: '70px', height: '70px'}} color={'white'} alignItems={'center'} justifyContent={'center'} display={'flex'}>No IMG</Box>
				)
			}
			<Box display={'flex'} flexDirection={'column'} maxWidth={'221px'} padding={'5px 5px 5px 10px'}>
				<Typography sx={{
					whiteSpace: 'nowrap', // 줄 바꿈 방지
					overflow: 'hidden', // 넘치는 텍스트 숨김
					textOverflow: 'ellipsis', // ... 표시
					maxWidth: '100%', // 최대 너비 설정 (필수)
					fontWeight: 'bold',
					color: '#1db954',
					fontSize: '12pt'
				}}>{title}</Typography>
				{/* <Box display={'flex'}> */}
					<Typography fontSize={'10pt'} sx={{ textTransform: 'capitalize' }} >{type}</Typography>
					<Typography fontSize={'10pt'} sx={{ textTransform: 'capitalize' }} >{ownerName}</Typography>
				{/* </Box> */}
			</Box>
			
		</ContentBox>
	)
}
export default PlaylistItem