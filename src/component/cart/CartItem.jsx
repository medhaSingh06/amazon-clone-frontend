/* eslint-disable react/prop-types */
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";

import { removeItemFromCart, updateItemOfCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
export const CartItem = (props) => {
  const { id, name, quantity, price, image } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    const ProductId = id;

    dispatch(removeItemFromCart(ProductId))
      .then(() => {
        console.log("Item removed from cart");
      })
      .catch((error) => {
        console.log("Error removing item from cart:", error);
      });
  };

  const handleUpdateQty = (id, quantity) => {
    const data = {
      ProductId: id,
      quantity: quantity,
    };

    dispatch(updateItemOfCart(data))
      .then((response) => {
        console.log("item updated to cart", response);
      })
      .catch((err) => {
        console.log("Error in updating the cart", err);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ width: "100%", minHeight: "400px" }}>
      <Paper elevation={3} sx={{ bgcolor: "#323533" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ Width: 200 }}>
              <CardMedia sx={{ height: 140 }} image={image} alt={name} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Text content goes here */}
            <Typography variant="h5" color="primary" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" color="secondary">
              Price: {price}
            </Typography>
            <Typography variant="body2" color="secondary">
              Quantity: {quantity}
            </Typography>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => handleUpdateQty(id, quantity + 1)}
              >
                +
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => handleUpdateQty(id, quantity - 1)}
                disabled={quantity === 1}
              >
                -
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleRemove}
              >
                Remove
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
