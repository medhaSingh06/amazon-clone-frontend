import { AppBar, Button, IconButton, Stack, Toolbar, Typography, Badge } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './Layout.css'
import {Link}  from  'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UseAuth } from '../context/AuthContext';
// import { useEffect, useState } from 'react';
// import { getCart } from '../api/apiHandler';
import { useSelector } from 'react-redux';
export const Header = () => {
  
  const {token,signOut} = UseAuth()
  // const [totalQuantity, setTotalQuantity] = useState()
  const quantity = useSelector(state => state.cart.totalQuantity)
  console.log(quantity)
  // useEffect(() => {
  //   getCart()
  //   .then(res => {
  //     setTotalQuantity(res.data.total_quantity)
  //   })
  // }, [])

  // useEffect(()=>{

  // },[totalQuantity])

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
          
         { !token ? (
            <>
            <Button color='secondary' component={Link} to="/" >Store</Button>
            <Button color='secondary' component={Link} to="/product" >Products</Button>
            {/* <Button color="secondary" component={Link} to='/register' >Register</Button> */}
            <Button color="secondary" component={Link} to="signIn">Sign In</Button>
            </>
         ) : (
          <>
  
          <Button color='secondary' component={Link} to="/" >Store</Button>
          <Button color='secondary' component={Link} to="/product" >Products</Button>
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
          <Button color='secondary' component={Link} to="/order" >Orders</Button>
          <Button color='secondary' component={Link} to="/signIn" onClick={() => signOut()} >Sign Out</Button>
      </>
         )
         }
        
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
