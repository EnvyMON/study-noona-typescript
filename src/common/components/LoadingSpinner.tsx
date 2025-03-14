import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
	<Box 
		sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',  // 수평 중앙 정렬
			alignItems: 'center',      // 수직 중앙 정렬
			height: '100vh'            // 화면 전체 높이 사용
		}}
    >
      <CircularProgress />
	  <Typography sx={{ mt: 2 }} >Loading . . .</Typography>
    </Box>
  )
}

export default LoadingSpinner