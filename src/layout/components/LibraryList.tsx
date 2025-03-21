import { Box, styled } from '@mui/material';
import { useGetLoginUserPlaylist, useGetLoginUserPlaylistInfinite } from '../../hooks/useGetLoginUserPlaylist'
import EmptyPlayList from './EmptyPlayList'
import PlaylistItem from './PlaylistItem';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const ContentBox = styled(Box)(({ theme })=>({
	display: 'flex',
	flexDirection: 'column',
	color: theme.palette.text.primary,
	width: '100%',
	marginTop: '10px',
	gap: '15px',

	maxHeight: "650px", // 최대 높이 지정
	overflowY: "auto", // 세로 스크롤 가능하게 설정
	scrollbarWidth: "none", // 스크롤바 숨김
}))

const LibraryList = () => {

	// const { data } = useGetLoginUserPlaylist();
	// console.log('dddd : ', data)
	const { data, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetLoginUserPlaylistInfinite({limit: 10, offset: 0});

	const { ref, inView } = useInView();
	useEffect(()=>{
		if(inView && hasNextPage && !isFetchingNextPage){
			fetchNextPage()
		} 
	}, [inView])

	useEffect(()=>{
		console.log(data)
	}, [data])


	return (
		<>
			{
				data && data.pages[0]?.total > 0 ? (
					<ContentBox>
						{
							data.pages.map((item) => (
								item.items.map((item2, idx) => (
									<PlaylistItem  
										key={idx}
										playlistImg={(item2.images && item2.images.length > 0) ? item2.images[0].url : null}
										title={item2.name || null} 
										ownerName={item2.owner?.display_name || null}
										type={item2.type || ""}
									/>
								))
							))
						}
						<div ref={ref}></div>
					</ContentBox>
				) : (
					<EmptyPlayList />
				)
			
			}
		</>
	)
}

export default LibraryList