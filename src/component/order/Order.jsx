import { Button, CircularProgress, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from './OrderItem'
import { getOrder } from '../../api/apiHandler'



export const Order = () => {
    const orders = useSelector(state => state.order.orderDetails)
    // const loading= useSelector(state => state.order.loading)
    // console.log(orderItems, "ORDERTIEMS")

    // const [orders, setOrders] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [initialFetchDone, setInitialFetchDone] = useState(false);

    // useEffect( () => {
    //   setLoading(true)
      
    //   .then(res => {
    //     console.log(res, "RES")
    //     if(res.status===200)
    //     {
    //       setOrders([...res.data.orders])
          
    //       setLoading(false)
    //       setInitialFetchDone(true);
    //     }
    //   })
    // }, [])

    console.log(orders, "ORDERS")
  return (
    <div>
      <Typography variant='h4' color='secondary'> Order History</Typography>
      
      <Grid container spacing={3}>
  { orders.length > 0 ? (
    orders.map((item) => (
      
      <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
        <Paper key={item.id} elevation={3} style={{ padding: '20px', margin: '10px' }}>
          <OrderItem
            id={item.id}
            orderDate={item.orderDate}
            paymentMethod={item.paymentMethod}
            status={item.status}
            totalPrice={item.totalPrice}
            products={item.Products}
          />
        </Paper>
      </Grid>
    ))
  ) : (
    <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>No orders Found</Typography>
  )}
</Grid>
      

      
    </div>
    
  )
}




