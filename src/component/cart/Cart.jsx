import { Paper, Table, TableContainer, TableHead, TableBody,Grid, Typography, Button, TableRow, TableCell } from '@mui/material'

// import {DUMMY_ITEMS} from '../../MenuData'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
export const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  
  const navigate = useNavigate()
  const handleCheckout = () => {
      navigate('/checkout')
  }

  return (
    <div>
    <Typography variant="h4" gutterBottom color='secondary'>
    Shopping Cart
  </Typography>

      {cartItems.length > 0 ? (
  cartItems.map((item) => (
    
    <CartItem
      key={item.id}
      id={item.id}
      itemName={item.itemName}
      quantity={item.quantity}
      price={item.price}
      description={item.description}
      image={item.imageURL}
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
    TotalPrice: ₹{totalPrice.toFixed(2)}
  </Typography>
  <Typography variant="h6" gutterBottom color='secondary' align='right'>
    TotalQuantity {totalQuantity}
  </Typography>
  <Button variant="contained" color="primary" disabled={cartItems.length <= 0} onClick={handleCheckout}>
        Checkout
      </Button>
      </Grid>
</div>
    
  )
}
