import { Paper, Table, TableContainer, TableHead, TableBody, Typography, Button, TableRow, TableCell } from '@mui/material'

// import {DUMMY_ITEMS} from '../../MenuData'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'
export const Cart = () => {

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = useSelector(state => state.cart.totalPrice)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  console.log(cartItems)
  return (
    <div>
    <Typography variant="h4" gutterBottom>
    Shopping Cart
  </Typography>
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cartItems.map((item) => (
          <CartItem key={item.id} 
          id={item.id}
          itemName={item.itemName} 
          quantity={item.quantity}
          price={item.price}
          description={item.description}
          image={item.imageURL}  
          />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <Typography variant="h6" gutterBottom>
    TotalPrice: {totalPrice}
  </Typography>
  <Typography variant="h6" gutterBottom>
    TotalQuantity {totalQuantity}
  </Typography>
  <Button  variant="contained" color="primary">
    Checkout
  </Button>
</div>
    
  )
}
