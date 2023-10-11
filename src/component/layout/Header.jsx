import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
        <LocalMallOutlinedIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow:1}}>
          Tech Mart
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Products</Button>

        </Stack>
      </Toolbar>
    </AppBar>
  )
}
