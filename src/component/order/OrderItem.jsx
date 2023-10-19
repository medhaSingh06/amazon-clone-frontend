/* eslint-disable react/prop-types */
import {
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";
import { OrderProducts } from "./OrderProducts";

export const OrderItem = (props) => {
  const { orderDate, status, totalPrice, products } = props;

  return (
    <Container maxWidth="sm" sx={{ width: "100%", minHeight: "400px" }}>
      <Grid>
        <Grid item xs={12} sm={6}>
          {/* Text content goes here */}
          <Typography component="div" gutterBottom>
            {orderDate}
          </Typography>
          <Typography variant="body2">{status}</Typography>
          <Typography variant="body2">Total Price: {totalPrice}</Typography>
          <Typography variant="body2">Products:</Typography>
          <Table>
            <TableHead>
              <TableCell>Items</TableCell>
              <TableCell>Price</TableCell>
            </TableHead>
            <TableBody>
              {products.map((item, index) => (
                <OrderProducts
                  key={index}
                  productName={item.name}
                  productPrice={item.price}
                  productImage={item.image}
                />
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  );
};
