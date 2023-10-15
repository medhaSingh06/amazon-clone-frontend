import { Grid, Typography, Button, } from '@mui/material'

// import {DUMMY_ITEMS} from '../../MenuData'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../store/cartSlice'
import { useEffect } from 'react'
// import { useEffect, useState } from 'react'
// import { fetchCart } from '../../store/cartSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart } from '../../api/apiHandler'
export const Cart = () => {

  // const [cartItems, setCartItems] = useState([])
  // const [totalPrice, setTotalPrice] = useState()
  // const [totalQuantity, setTotalQuantity] = useState()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  // const [cartItem, setCartItem] = useState([])
  const navigate = useNavigate()
  const handleCheckout = () => {
      navigate('/checkout')
  }
  console.log(cartItems, "ITEMS")
  console.log(totalPrice, "PRICE")
  console.log(totalQuantity, "QTY")
  
  useEffect( () => {
    dispatch(fetchCart())
  }, [totalPrice,totalQuantity, dispatch])
  
  // useEffect(() => {
  //   dispatch(fetchCart())
    // getCart()
    // .then(res => {
    //   console.log("fetched cart",res.data.cart_items)
    //   console.log("fetched cart",res.data.total_price)
    //   console.log("fetched cart",res.data.total_quantity)
    //   setCartItems(res.data.cart_items)
    //   setTotalPrice(res.data.total_price)
    //   setTotalQuantity(res.data.total_quantity)


    // })
    // .catch((err)=>{
    //   console.log(err)
    //   setCartItems([])
    // })
  // },[])

  return (
    <div>
    <Typography variant="h4" gutterBottom color='secondary'>
    Shopping Cart
  </Typography>

      {/* PROVIDE IMAGE AND IF URL FROM THE BACKEND */}
      {cartItems.length > 0 ? (
  cartItems.map((item) => (
    <>

    <CartItem
      key={item.product_id}
      id={item.product_id}
      name={item.product_name}
      quantity={item.quantity}
      price={item.price_per_unit}
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
    TotalQuantity: {totalQuantity} 
  </Typography>
  <Button 
  variant="contained" 
  color="primary" 
  // disabled={cartItems.length <= 0} 
  onClick={handleCheckout}>
        Checkout
      </Button>
      </Grid>
</div>
    
  )
}
