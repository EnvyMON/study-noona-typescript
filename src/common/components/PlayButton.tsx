import { styled } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CustomPlayButton = styled('button')(({ theme })=>({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	borderRadius: '50%',
	width: '45px',
	height: '45px',
	backgroundColor: theme.palette.primary.main,
	padding: 0,
	cursor: 'pointer',
	right: 10,
	bottom: 15,
	boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 8px 0px',
	border: 'none',
	'&:focus': {
		ouline: 'none'
	}
}))

const PlayButton = () => {
  return (
    <CustomPlayButton>
        <PlayArrowIcon sx={{color: 'black', width: '55px', height: '25px'}}/>
    </CustomPlayButton>
  )
}

export default PlayButton