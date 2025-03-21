import { Box, Button, styled } from '@mui/material'
import LoginButton from '../../common/components/LoginButton'
import { useGetLoginUserProfile } from '../../hooks/useGetLoginUserProfile'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';


const ProfileImageBox = styled(Box)(({ theme })=>({
	width: '50px', // 원하는 크기
	height: '50px', // 원하는 크기
	borderRadius: '50%', // 동그란 모양을 만들기 위해
	overflow: 'hidden', // 이미지가 영역을 벗어나지 않도록
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: 'none', // 테두리 추가 (옵션)
	cursor: 'pointer'
}))

const ProfileInfoBox = styled(Button)(({ theme })=>({
	width: '200px', // 원하는 크기
	height: '55px', // 원하는 크기
	display: 'flex',
	backgroundColor: theme.palette.action.hover,
	borderRadius: 0,
	paddingLeft: "20px",
	justifyContent: 'start',
	alignItems: 'center',
	border: 'none', // 테두리 추가 (옵션)
	cursor: 'pointer',
	position: 'absolute',
	zIndex: 3,
	top: "100px",
	right: "45px",
	fontSize: "13pt",
	color: 'white'
}))


const NavBar = () => {

	const {data: userProfile} = useGetLoginUserProfile();
	const [showMenu, setShowMenu] = useState(false);

	const showProfileBox = () => {
		setShowMenu(prev => !prev); 
	}

	const logout = (event: React.MouseEvent) => {
		event.stopPropagation(); 
		localStorage.removeItem('access_token');
		window.location.href = '/';
	}

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			height: '64px',
			paddingRight: '15px'
		}}>
			{
				userProfile ? (
					userProfile.images[0] ? (
						<ProfileImageBox onClick={showProfileBox}>
							<img
								src={userProfile.images[0].url}
								alt="profile-image"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }} // 이미지가 박스를 꽉 채우도록
							/>
							{
								showMenu && (
									<ProfileInfoBox onClick={logout}>Log out</ProfileInfoBox>
								)
							}
							
						</ProfileImageBox>
					) : (
						<ProfileImageBox >
							<AccountCircleIcon sx={{color: 'gray', width: '65px', height: '65px'}}/>
						</ProfileImageBox>
					)
				)
				: (
					<LoginButton />
				)
			}
		</Box>
	)
}

export default NavBar