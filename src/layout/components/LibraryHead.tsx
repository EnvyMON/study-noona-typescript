import { Button, Typography } from "@mui/material";
import { YouLibraryBox } from "./LibraryHead.styles"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';

const LibraryHead = () => {
  return (
	<YouLibraryBox>
		<BookmarkIcon />
		<Typography variant='h2' fontWeight={'700'}>Your Library</Typography>
		<Button>
			<AddIcon />
		</Button>
	</YouLibraryBox>
  )
}

export default LibraryHead