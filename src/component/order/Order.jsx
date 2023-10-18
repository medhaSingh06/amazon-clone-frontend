import React, { useEffect, useState } from 'react'
import { getOrder } from '../../api/apiHandler'
import { Grid, Paper, Typography } from '@mui/material'

import { OrderItem } from './OrderItem'
export const Order = () => {
  const [orders, setOrders] = useState([])

  useEffect( () => {
    getOrder()
    .then(res => {
      setOrders(res.data.OrderDetails)
    })
  }, [])
  return (
    <div>
    <Typography variant='h4' color='secondary'> Order History</Typography>

      
    <Grid container spacing={3}>
{ orders.length > 0 ? (
  orders.map((item) => (
    
    <Grid item xs={12} sm={6} md={3} lg={3} key={item.id}>
      <Paper key={item.id} elevation={3} style={{ padding: '20px', margin: '10px' }}>
        <OrderItem
          id={item.id}
          orderDate={item.order_date}
          // paymentMethod={item.paymentMethod}
          status={item.status}
          totalPrice={item.total_price}
          products={item.products}
        />
      </Paper>
    </Grid>
  ))
) : (
  <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>No orders Found</Typography>
)}
</Grid></div>
  )
}
