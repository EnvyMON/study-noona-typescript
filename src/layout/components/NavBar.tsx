import { Box } from '@mui/material'
import LoginButton from '../../common/components/LoginButton'

const NavBar = () => {
  return (
	<Box sx={{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		height: '64px'
	}}>
		<LoginButton />
	</Box>
  )
}

export default NavBar