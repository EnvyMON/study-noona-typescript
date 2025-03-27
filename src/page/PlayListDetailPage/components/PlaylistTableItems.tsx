import React from 'react'
import { EpisodeObjectType, PlaylistTrackObjectType, TrackObjectType } from '../../../models/playlist';
import { TableCell, TableRow } from '@mui/material';

type PlaylistTableItemsProps = {
	indexNum: number;
	item: PlaylistTrackObjectType
}

const PlaylistTableItems = ({item, indexNum}: PlaylistTableItemsProps) => {

	const isEpisode = (track: TrackObjectType | EpisodeObjectType): track is EpisodeObjectType => {
		if ('album' in track) {
			return false
		} else {
			return true
		}
	};

	return (
		<TableRow sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>
			<TableCell>{indexNum}</TableCell>
			<TableCell>{item.track?.name}</TableCell>
			<TableCell>
				{
					item.track ? (
						isEpisode(item.track) ? ("No Album") : (item.track.album?.name)
					) : (
						""
					)
				}
			</TableCell>
			<TableCell>{item.added_at?.slice(0, 10)}</TableCell>
			<TableCell>{item.track?.duration_ms}</TableCell>
		</TableRow>
	)
}

export default PlaylistTableItems