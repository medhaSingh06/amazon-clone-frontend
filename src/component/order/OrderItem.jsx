import { Card, CardContent, CardMedia, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { OrderProducts } from './OrderProducts'

export const OrderItem = (props) => {
    const {  orderDate, status, totalPrice, products} = props
    // console.log(name, "name")
    // console.log(image, "image")
    // console.log(price)
    // console.log(price, "price")

    // console.log(totalPrice, "totalPrice")
    // console.log(orderDate, "orderDate")
    // console.log(paymentMethod, "paymentMethod")
    // console.log(status, "status")
    // console.log(products, "status")
  return (
    
    <Container maxWidth="sm" sx={{ width: '100%', minHeight: '400px' }}>
    <Grid >
      <Grid item xs={12} sm={6} >
        {/* Text content goes here */}
        <Typography  component="div"  gutterBottom>
        {orderDate}
        </Typography>
        <Typography variant="body2" >
        {status}
        </Typography>
        <Typography variant="body2" >
        Total Price: {totalPrice}
        </Typography>
        <Typography variant="body2" >
        Products:
        </Typography>
        <Table>
          <TableHead>
            <TableCell>Items</TableCell>
            <TableCell>Price</TableCell>
          </TableHead>
          <TableBody>
          {products.map((item, index) => (
          
          <OrderProducts 
             key={index}
          // id={index}
          productName={item.name}
          productPrice={item.price}
          productImage ={item.image}
          />
          
        
      ))}
          </TableBody>
        </Table>
        
                 
      </Grid>
    </Grid>

  </Container>
    
    
      
  )
}


