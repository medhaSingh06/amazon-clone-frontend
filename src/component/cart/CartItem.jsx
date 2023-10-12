import React from 'react'
import { Container, Grid, Typography,Paper, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material'
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
    <Container maxWidth="sm" sx={{ width: '100%', minHeight: '400px' }}>
    <Paper elevation={3} sx={ {bgcolor: "#323533"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={itemName}
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Text content goes here */}
        <Typography variant="h4" color="primary" gutterBottom>
          {itemName}
        </Typography>
        <Typography variant="body2" color="secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="secondary">
          Price: {price}
        </Typography>
        <Typography variant="body2" color="secondary">
        Quantity: {quantity}
        </Typography>
        <CardActions>
                   <Button size="small" color="secondary" onClick={addItemHandler} variant='outlined'>
                     +
                   </Button>
                   <Button size="small" color="secondary" onClick={removeItemHandler} variant='outlined'>
                     -
                   </Button>
                   <Button variant="outlined" color="secondary" onClick={removeEntireItem}>
                     Remove
                   </Button>
                 </CardActions>
                 
      </Grid>
    </Grid>
    </Paper>
  </Container>
    // <Container maxWidth="sm" sx={{ width: '100%', minHeight: '400px' }}>
    //     <Grid container spacing={2}>
    //         <Grid item xs={12} key={id}>
    //           <Card>

    //             <CardMedia
    //               component="img"
    //               height="100"
    //               image={image}
    //               alt={itemName}
    //             />
    //             <CardContent>
    //               <Typography variant="h6" component="div">
    //                 {itemName}
    //               </Typography>
    //               <Typography variant="body2" color="textSecondary">
    //                 Price: ${price}
    //               </Typography>
    //               <Typography variant="body2" color="textSecondary">
    //                 Quantity: {quantity}
    //               </Typography>
    //               <Button variant="outlined" color="primary" onClick={removeEntireItem}>
    //                 Remove
    //               </Button>
    //             </CardContent>
    //             <CardActions>
    //               <Button size="small" color="primary" onClick={addItemHandler}>
    //                 Increase Quantity
    //               </Button>
    //               <Button size="small" color="primary" onClick={removeItemHandler}>
    //                 Decrease Quantity
    //               </Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //     </Grid>
    // </Container>
    // <TableRow>
    // <TableCell>
    // <div style={{width:'100px'}}>
    //   <CardMedia 
    //     component="img"
    //     alt={itemName}
    //     height="50"
    //     image={image}
    //   />
    //   </div>
    // </TableCell>
    //   <TableCell>{itemName}</TableCell>
    //   <TableCell>${price}</TableCell>
    //   <TableCell>${quantity}</TableCell>
    //   <TableCell>${price*quantity}</TableCell>
    //   <TableCell>
    //   <Button
    //       onClick={addItemHandler} 
    //       variant="outlined"
    //       color="primary"
    //     >
    //       +Add
    //     </Button>
    //   </TableCell>
    //   <TableCell>
    //     <Button
    //       onClick={removeItemHandler} 
    //       variant="outlined"
    //       color="primary"
    //     >
    //       -Remove
    //     </Button>
    //   </TableCell>
    //   <TableCell>
    //     <Button
    //       onClick={removeEntireItem}
    //       variant="outlined"
    //       color="primary"
    //     >
    //       Remove
    //     </Button>
    //   </TableCell>
    // </TableRow>
  )
}
