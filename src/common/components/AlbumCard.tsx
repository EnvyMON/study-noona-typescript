import { Box, Button, styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";


const ContentBox = styled(Box)(({ theme })=>({
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '10px',
	color: theme.palette.text.primary,
	width: '100%',
	padding: '15px',
	transition: 'background-color 0.3s ease',
	marginTop: '10px',
	cursor: 'pointer',
	'& .play-button-box': {
		opacity: 0, // 기본 상태
		transition: 'opacity 0.5s ease', // 부드러운 전환 효과
	},
	'&:hover': {
		backgroundColor: theme.palette.action.hover
	},
	'&:hover .play-button-box': {
		opacity: 1, // hover 시 보이도록
	},
}))

type AlbumCardProps = {
    imageUrl: string;
    titleName: string;
    artistName: string;
}

const AlbumCard = ({imageUrl, titleName, artistName}: AlbumCardProps) => {
    return (
		<ContentBox>
			<Box position={'relative'}>
				<img src={imageUrl} style={{width: '100%'}}/>
				<div className="play-button-box">
					<PlayButton />
				</div>
			</Box>
				{/* <img src={imageUrl} style={{width: '100%'}}/>
				<CustomPlayButton ></CustomPlayButton> */}
			<Typography fontSize={'14px'} fontWeight={'bold'} sx={{
				whiteSpace: 'nowrap', // 줄 바꿈 방지
				overflow: 'hidden', // 넘치는 텍스트 숨김
				textOverflow: 'ellipsis', // ... 표시
				maxWidth: '100%' // 최대 너비 설정 (필수)
			}}>{titleName}</Typography>
			<Typography fontSize={'12px'} color={'lightgray'}>{artistName}</Typography>
		</ContentBox>
    )
}

export default AlbumCard