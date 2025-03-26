import { Box, styled } from '@mui/material';
import { useGetLoginUserPlaylist, useGetLoginUserPlaylistInfinite } from '../../hooks/useGetLoginUserPlaylist'
import EmptyPlayList from './EmptyPlayList'
import PlaylistItem from './PlaylistItem';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { GetLogtinUserPlaylistResponseType, SimplifiedPlaylistObjectType } from '../../models/playlist';

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

 	const navigate = useNavigate();

	const { data, error, hasNextPage, isFetchingNextPage, fetchNextPage } = useGetLoginUserPlaylistInfinite({limit: 10, offset: 0});
	// console.log('dddd : ', data)

	const { ref, inView } = useInView();
	useEffect(()=>{
		if(inView && hasNextPage && !isFetchingNextPage){
			fetchNextPage()
		} 
	}, [inView])

	// active control
	const [activeId, setActiveId] = useState("");
	const handleOnClick = (id: string | undefined) => {
		if (id){
			setActiveId(id);
			navigate(`/playlist/${id}`)
		}
	}

	const itemlist: SimplifiedPlaylistObjectType[] = [];
	if (data){
		itemlist.push(...data.pages[0].items)
	}	

	return (
		<>
			{
				itemlist ? (
					<ContentBox>
						{
							itemlist.map((item, idx)=>{
								return (
									<PlaylistItem  
										key={idx}
										playlistId={item.id}
										playlistImg={(item.images && item.images.length > 0) ? item.images[0].url : null}
										title={item.name || null} 
										ownerName={item.owner?.display_name || null}
										type={item.type || ""}
										handleOnClick={handleOnClick}
										isActive={activeId === item.id}
									/>
								)
							})
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