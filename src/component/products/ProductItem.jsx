import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cartActions } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Snackbar, SnackbarContent } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UseAuth } from '../context/AuthContext';
export const ProductItem = (props) => {
  const dispatch = useDispatch()
  const {id,itemName, price, description, imageURL} = props

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const {token} = UseAuth()


  const handleAddToCart = () => {
    if(token){
      dispatch(cartActions.addItemToCart({
        id,
        itemName,
        price,
        description,
        imageURL
      }))  
    }
    
    setIsSnackbarOpen(true)
  }

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false)
  }
  
  
  return (
    <Card sx={{ Width: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={imageURL}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {itemName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color='primary'sx={{ fontWeight: 'bold' }} >₹{price}</Button>
      <Button size="small" onClick={handleAddToCart} color='primary' sx={{ fontWeight: 'bold' }}>Add to Cart</Button>
      <Button size="small" color='primary' component={Link} to={`/product/${id}`}  sx={{ fontWeight: 'bold' }}>View Product</Button>

      <Snackbar 
      open={isSnackbarOpen}
      autoHideDuration={1000}
      onClose={handleSnackbarClose}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      >
      {token ? (
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Product added to cart
            </Alert>
          ) : (
            <Alert
              onClose={handleSnackbarClose}
              severity="info"
              sx={{ width: '100%' }}
            >
              Please sign in to add the product to the cart.
            </Alert>
          )}
      </Snackbar>
    </CardActions>
  </Card>
  )
}


