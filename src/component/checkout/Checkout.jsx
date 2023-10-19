
import {Typography, Box, Container, Paper} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export const Checkout = () => {
  const [orderNumber, setOrderNumber] = useState('');
  function generateRandomOrderNumber() {
    return `#${Math.floor(Math.random() * 10000000)}`;
  }

  useEffect(() => {
    const randomOrderNumber = generateRandomOrderNumber();
    setOrderNumber(randomOrderNumber);
   
  }, []);
  
  
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h5" gutterBottom >
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1" >
              Your order number is {orderNumber}. We have emailed your order confirmation, and will send you an update when your order has shipped.
            </Typography>
            <Link
              variant="subtitle1"
              to="/order" // Replace with the correct URL for checking orders
              color="primary"
            >
              Check your orders
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}



              
  