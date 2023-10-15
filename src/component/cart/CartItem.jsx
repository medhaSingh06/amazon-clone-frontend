import { Container, Grid, Typography,Paper, Button, Card, CardMedia, CardActions } from '@mui/material'

// import { cartActions } from '../../store/cartSlicewsd'
import { removeItemFromCart } from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
export const CartItem = (props) => {
  // const {id,itemName, quantity, price, description, image} = props
const {id, name, quantity, price, image} = props
// console.log(props, "PROPS")
  
const dispatch = useDispatch()
// const totalQuantity = useSelector()

const handleRemove = () => {
  console.log(id);
  const ProductId = id;
  console.log(ProductId);

  dispatch(removeItemFromCart(ProductId))
    .then(() => {
      console.log("Item removed from cart");
    })
    .catch((error) => {
      console.log("Error removing item from cart:", error);
    });
};

  return (
    <Container maxWidth="sm" sx={{ width: '100%', minHeight: '400px' }}>
    <Paper elevation={3} sx={ {bgcolor: "#323533"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={name}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Text content goes here */}
        <Typography variant="h4" color="primary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="secondary">
        Quantity: {quantity}
        </Typography>
        <CardActions>
              <Button size="small" color="secondary" variant='outlined'>
                     +
                   </Button>
                   <Button size="small" color="secondary"  variant='outlined'>
                     -
                   </Button>
                   <Button variant="outlined" color="secondary" onClick={handleRemove}>
                     Remove
                   </Button>
                 </CardActions>
                 
      </Grid>
    </Grid>
    </Paper>
  </Container>
    
  )
}
