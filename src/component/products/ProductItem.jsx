import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { cartActions } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
export const ProductItem = (props) => {
  const dispatch = useDispatch()
  const {id,itemName, price, description, imageURL} = props
console.log(imageURL)
  // console.log(imageURL)
  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart({
      id,
      itemName,
      price,
      description,
      imageURL
    }))
  }
 
  
  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <Button size="small">{price}</Button>
      <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )
}


