/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { OrderProducts } from './OrderProducts'

export const OrderItem = (props) => {
    const {  orderDate, paymentMethod, status, totalPrice, products} = props
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
    <Card>
    
    <CardContent>
      <Typography variant="h6">{orderDate}</Typography>
      <Typography>Price: {totalPrice}</Typography>
      <Typography>payment_method: {paymentMethod}</Typography>
      <Typography>status: {status}</Typography>
      {
        products.map( (item, index) => (
          <OrderProducts 
            key={index}
            id={index}
            productName={item.ProductName}
            productPrice={item.ProductPrice}
            productImage ={item.ProductImage}
          />
        ))
      }
    </CardContent>
  </Card>
  )
}
