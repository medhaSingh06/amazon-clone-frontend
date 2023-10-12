import React from 'react'
import { TableRow, TableCell, Button, CardMedia } from '@mui/material'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cartSlice'
export const CartItem = (props) => {
  const {id,itemName, quantity, price, description, image} = props

  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      itemName,
      price,
      description, 
      image
    }))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const removeEntireItem = () => {
    dispatch(cartActions.removeEntireItem(id))
  }

  return (
    <TableRow>
    <TableCell>
    <div style={{width:'100px'}}>
      <CardMedia 
        component="img"
        alt={itemName}
        height="50"
        image={image}
      />
      </div>
    </TableCell>
      <TableCell>{itemName}</TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>${quantity}</TableCell>
      <TableCell>${price*quantity}</TableCell>
      <TableCell>
      <Button
          onClick={addItemHandler} 
          variant="outlined"
          color="primary"
        >
          Add
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={removeItemHandler} 
          variant="outlined"
          color="secondary"
        >
          Remove
        </Button>
      </TableCell>
      <TableCell>
        <Button
          onClick={removeEntireItem}
          variant="outlined"
          color="secondary"
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  )
}
