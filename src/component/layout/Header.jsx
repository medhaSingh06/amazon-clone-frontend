import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {Link}  from  'react-router-dom'
export const Header = ({openCartModal, isCartOpen}) => {
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
          <Button color='inherit' component={Link} to="/">Store</Button>
          <Button color='inherit' component={Link} to="/products">Products</Button>
          <Button color='inherit' component={Link} to="/userProfile">Profile</Button>
          {/* if not login */}
          <Button color='inherit' component={Link} to="/signIn">Sign In</Button>
          <Button color='inherit' component={Link} to='/cart'onClick={openCartModal} >Cart</Button>
          {isCartOpen ? <span>Cart is open</span>: null}
          {/* <Button color='inherit'>Cart items: 0</Button> */}

        </Stack>
      </Toolbar>
    </AppBar>
  )
}
