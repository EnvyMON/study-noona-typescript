import { Box, styled } from '@mui/material'
import LoginButton from '../../common/components/LoginButton'
import { userGetLoginUserProfile } from '../../hooks/userGetLoginUserProfile'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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



const NavBar = () => {

	const {data: userProfile} = userGetLoginUserProfile();
	console.log(userProfile)

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
						<ProfileImageBox >
							<img
								src={userProfile.images[0].url}
								alt="profile-image"
								style={{ width: '100%', height: '100%', objectFit: 'cover' }} // 이미지가 박스를 꽉 채우도록
							/>
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