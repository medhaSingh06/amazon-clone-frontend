import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../api/apiHandler";
import {
  Alert,
  Button,
  Container,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import { UseAuth } from "../../context/AuthContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { token } = UseAuth();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleAddToCart = () => {
    const data = {
      ProductId: id,
      quantity: 1,
    };

    dispatch(addItemToCart(data))
      .then((response) => {
        console.log("Item added to cart", response);
        setIsSnackbarOpen(true);
      })
      .catch((err) => {
        console.log("Error in adding item to cart", err);
      });
  };
  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  useEffect(() => {
    getProduct({ id })
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        setProduct([]);
      });
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={product.image}
              alt="Product"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Price: ₹{product.price}
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {token ? (
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product added to cart
          </Alert>
        ) : (
          <Alert
            onClose={handleSnackbarClose}
            severity="info"
            sx={{ width: "100%" }}
          >
            Please sign in to add the product to the cart.
          </Alert>
        )}
      </Snackbar>
    </Container>
  );
};
