import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useGetPlaylist } from '../../hooks/useGetPlaylist';
import { Box, styled, Typography } from '@mui/material';


const ContentBox = styled(Box)(()=>({
	display: 'flex',
	borderRadius: '10px',
	backgroundColor: 'black',
	color: "white",
	width: '100%',
	padding: '30px 15px',
}));

const ImageBox = styled(Box)<{ imgSrc: string }>(({ imgSrc }) => ({
	width: '150px',
	height: '150px',
	backgroundImage: `url(${imgSrc})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	borderRadius: '10px',
	marginRight: '60px'
}));

const NoImageBox = styled(Box)(() => ({
	width: '150px',
	height: '150px',
	backgroundColor: 'black',
	borderRadius: '10px',
	marginRight: '60px'
}));

const TextBox = styled(Box)({
	display: 'flex',
	flexDirection: 'column',
	// alignItems: 'le'
	justifyContent: "center"
})



const PlayListDetailPage = () => {

	const navigate = useNavigate();
	const {id} = useParams();
	if (!id){
		navigate('/')
		return null;
	}
	const { data } = useGetPlaylist({playlist_id: id})

	// if (!data?.images) {
	// 	navigate('/')
	// 	return null;
	// }

	return (
		<ContentBox>
			{
				data?.images?.length && data?.images?.length > 0 ? (
					<>
						<ImageBox imgSrc={data?.images[0].url} />
						<TextBox>
							<Typography fontSize={"27pt"} fontWeight={'bold'}>
								{data.name}
							</Typography>
							<Typography display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'10pt'}>
								<Box display={'flex'}> 
									<img src={"https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"} width="24" height="24" />
								</Box>
								{data.owner?.display_name} / {data.tracks?.total} Songs
							</Typography>
						</TextBox>
					</>
				) : (
					<>
						<NoImageBox />
						<TextBox>
							<Typography fontSize={"27pt"} fontWeight={'bold'}>
								{data?.name}
							</Typography>
							<Typography display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'10pt'}>
								<Box display={'flex'}> 
									<img src={"https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5"} width="24" height="24" />
								</Box>
								{data?.owner?.display_name} / {data?.tracks?.total} Songs
							</Typography>
						</TextBox>
					</>
				)
			}
			
		</ContentBox>
	)
}

export default PlayListDetailPage