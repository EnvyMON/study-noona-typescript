import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';
import { useGetPlaylist } from '../../hooks/useGetPlaylist';
import { Box, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useGetPlaylistItems } from '../../hooks/useGetPlaylistItems';
import { useInView } from 'react-intersection-observer';
import PlaylistTableItems from './components/PlaylistTableItems';


const ContentBox = styled(Box)(()=>({
	display: 'flex',
	borderRadius: '10px',
	backgroundColor: 'black',
	color: "white",
	width: '100%',
	padding: '30px 15px',
}));

const ImageBox = styled(Box, {shouldForwardProp: (prop) => prop !== 'imgSrc' })<{ imgSrc: string }>(({ imgSrc }) => ({
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

const PlaylistItemsBox = styled(Box)({
	display: 'flex',
	overflowY: "auto", // 세로 스크롤 가능하게 설정
	scrollbarWidth: "none", // 스크롤바 숨김
	width: '100%',
	maxHeight: "550px"
})

const PlayListDetailPage = () => {

	// const navigate = useNavigate();
	const {id} = useParams();
	const { data: playlist } = useGetPlaylist({playlist_id: id})
	const { data: playListItems, error, hasNextPage, isFetchingNextPage, fetchNextPage} = useGetPlaylistItems({playlist_id: id || '', limit: 10});
	const { ref, inView } = useInView();
	useEffect(()=>{
		if(inView && hasNextPage && !isFetchingNextPage){
			fetchNextPage()
		} 
	}, [inView])

	if (id === undefined){
		return <Navigate to={'/'} />;
	}

	return (
		<>
			<ContentBox>
				{
					playlist?.images?.length && playlist?.images?.length > 0 ? (
						<>
							<ImageBox imgSrc={playlist?.images[0].url} />
							<TextBox>
								<Typography fontSize={"27pt"} fontWeight={'bold'}>
									{playlist.name}
								</Typography>
								<Box display={'flex'} gap={'10px'}> 
									<img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" width="24" height="24" />
									<Typography display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'10pt'}>
										{playlist.owner?.display_name} / {playlist.tracks?.total} Songs
									</Typography>
								</Box>
							</TextBox>
						</>
					) : (
						<>
							<NoImageBox />
							<TextBox>
								<Typography fontSize={"27pt"} fontWeight={'bold'}>
									{playlist?.name}
								</Typography>
								<Box display={'flex'} gap={'10px'}> 
									<img src="https://i.scdn.co/image/ab67757000003b8255c25988a6ac314394d3fbf5" width="24" height="24" />
									<Typography display={'flex'} alignItems={'center'} gap={'10px'} fontSize={'10pt'}>
										{playlist?.owner?.display_name} / {playlist?.tracks?.total} Songs
									</Typography>
								</Box>
							</TextBox>
						</>
					)
				}
				
			</ContentBox>
			<PlaylistItemsBox>
				<Table>
					<TableHead sx={{ position: 'sticky', top: 0, backgroundColor: "#121212", zIndex: 1}}>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Album</TableCell>
							<TableCell>Date added</TableCell>
							<TableCell>Duration</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{
						playListItems?.pages?.map((page, pageIndex) =>
							page.items.map((item, idx) => (
								<PlaylistTableItems key={idx} item={item} indexNum={pageIndex * 10 + idx + 1}/>
							))
						)
					}
					</TableBody>
				</Table>
				<div ref={ref}></div>
			</PlaylistItemsBox>
		</>
	)
}

export default PlayListDetailPage