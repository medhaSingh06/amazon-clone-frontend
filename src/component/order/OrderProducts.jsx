import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const OrderProducts = (props) => {
    const {productPrice, productName, productImage} = props
    // console.log(productImage)
  return (
    
        <Card sx={{ Width: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={productImage}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {productName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {productPrice}
      </Typography>
    </CardContent>
    </Card>
  )
}
