import { Grid, Typography, Button, } from '@mui/material'

// import {DUMMY_ITEMS} from '../../MenuData'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart, removeAllItemsFromCart } from '../../store/cartSlice'
import { useEffect } from 'react'
import { addOrderToOrder } from '../../store/orderSlice'
import { addOrder } from '../../api/apiHandler'
import { UseAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { fetchCart } from '../../store/cartSlice'
// import { useSelector } from 'react-redux'
// import { getCart } from '../../api/apiHandler'
export const Cart = () => {

  const {token} = UseAuth()
  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
         await dispatch(fetchCart());
    };
  
    fetchData();
  }, []);
  const handleCheckout = () => {
    const data ={
      shipping: {
        street: "street",
        city: "city",
        zipCode: "zipCode"
      },
      paymentMethod: "cash"
    }
    addOrder(data)
    .then((res) => {
      console.log("Order added successfully", res)
      return dispatch(removeAllItemsFromCart())
    })
    .then(() => {
      console.log("All items removed from the cart")
      navigate('/checkout')
    })
    .catch((err) => {
      console.log("Error in adding order or removing items", err)
    })
  }
  // console.log(cartItems)
  const handleRemoveAll =() => {  
      dispatch(removeAllItemsFromCart())
      .then((response) => {
        console.log("removed successful", response)
      })
      .catch((error) => {
        console.log("error in removing", error)
      })
  }
  return (
    <div>
    { !token ? ( <Typography>You are an unauthorized user.{' '}
          <Link to="/signin">Sign in</Link> to check your cart.</Typography>) : (
            <>
            <Typography variant="h4" gutterBottom color='secondary'>Shopping Cart</Typography>
  <Button 
  variant="contained" 
  color="primary" 
  disabled={cartItems.length <= 0}
  onClick={handleRemoveAll}
  >
        RemoveAll
      </Button>
    
      {/* PROVIDE IMAGE AND IF URL FROM THE BACKEND */}
      {cartItems.length > 0 ? (
  cartItems.map((item) => (
    <>

    <CartItem
      key={item.ProductId}
      id={item.ProductId}
      name={item.ProductName}
      quantity={item.quantity}
      price={item.total_price}
      image={item.image}
    />
    </>
  ))
) : (
  <Typography variant="h4" gutterBottom color='#3A3E3B'>Cart is empty</Typography>
)}

      {/* </TableBody>
    </Table>
  </TableContainer> */}
  <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
  <Typography variant="h6" gutterBottom color='secondary' align='right'>
    TotalPrice: {totalPrice}
  </Typography>
  <Typography variant="h6" gutterBottom color='secondary' align='right'>
    TotalQuantity:  {totalQuantity}
  </Typography>
  <Button 
  variant="contained" 
  color="primary" 
  disabled={cartItems.length <= 0} 
  onClick={handleCheckout}
  >
        Checkout
      </Button>
      </Grid>
      </>
          ) 

    }
    
</div>
    
  )
}
