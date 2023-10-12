import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Badge } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {Link}  from  'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
export const Header = () => {
  
  const quantity = useSelector(state => state.cart.totalQuantity)

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton size='large' edge='start' color='secondary' aria-label='logo'>
        <LocalMallOutlinedIcon/>
        </IconButton>
        <Typography variant='h6' component='div'color='secondary'  sx={{flexGrow:1}}>
          Tech Mart
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='secondary' component={Link} to="/" >Store</Button>
          <Button color='secondary' component={Link} to="/product" >Products</Button>
          <Button color='secondary' component={Link} to="/userProfile" >Profile</Button>
          {/* if not login */}
          <Button color='secondary' component={Link} to="/register" >Sign Up</Button>
          {/* <Button color='secondary' component={Link} to='/cart' ><ShoppingCartIcon />{quantity}</Button> */}

          <Button color='secondary' component={Link} to='/cart' ><Badge
        badgeContent={quantity}
        color="secondary"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        showZero
        max={99} // Customize the maximum displayed value
      >
        <ShoppingCartIcon sx={{ fontSize: 25 }}  />
      </Badge></Button>
          
          {/* <Button color='inherit'>Cart items: 0</Button> */}

        </Stack>
      </Toolbar>
    </AppBar>
  )
}
