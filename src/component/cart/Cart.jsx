import { Grid, Typography, Button, } from '@mui/material'

// import {DUMMY_ITEMS} from '../../MenuData'
import { CartItem } from './CartItem'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { fetchCart } from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
export const Cart = () => {

  // const [cartItem, setCartItem] = useState([])
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  console.log(cartItems, "CARTITEMS")
  const navigate = useNavigate()
  const handleCheckout = () => {
      navigate('/checkout')
  }

  useEffect(() => {
    dispatch(fetchCart())
    
    .then(res => {
      console.log("fetched cart",res)
      // setCartItem(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[dispatch])

  return (
    <div>
    <Typography variant="h4" gutterBottom color='secondary'>
    Shopping Cart
  </Typography>

      {/* PROVIDE IMAGE AND IF URL FROM THE BACKEND */}
      {cartItems.length > 0 ? (
  cartItems.map((item) => (
    
    <CartItem
      key={item.product_id}
      id={item.product_id}
      itemName={item.product_name}
      quantity={item.quantity}
      price={item.price_per_unit}
      image={item.image}
    />
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
