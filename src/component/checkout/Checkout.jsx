
import {Typography, Box, Container, Paper} from '@mui/material';



export const Checkout = () => {
  
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
              Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  )
}



              
  