import { useEffect, useState } from "react";
import { getOrder } from "../../api/apiHandler";
import { Box, Grid, Paper, Typography } from "@mui/material";

import { OrderItem } from "./OrderItem";
import { UseAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export const Order = () => {
  const [orders, setOrders] = useState([]);
  const { token } = UseAuth();

  useEffect(() => {
    getOrder().then((res) => {
      setOrders(res.data.OrderDetails);
    });
  }, []);
  return (
    <div>
      {!token ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="98vh"
          padding="16px"
        >
          <Typography variant="h4" gutterBottom color="secondary">
            You are an unauthorized user.{" "}
            <Link
              to="/signin"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Sign in
            </Link>{" "}
            to check your orders.
          </Typography>
        </Box>
      ) : (
        <>
          <Typography variant="h4" color="secondary">
            {" "}
            Order History
          </Typography>

          <Grid container spacing={3}>
            {orders.length > 0 ? (
              orders.map((item) => (
                <Grid item xs={12} sm={6} md={3} lg={3} key={item.id}>
                  <Paper
                    key={item.id}
                    elevation={3}
                    style={{ padding: "20px", margin: "10px" }}
                  >
                    <OrderItem
                      id={item.id}
                      orderDate={item.order_date}
                      status={item.status}
                      totalPrice={item.total_price}
                      products={item.products}
                    />
                  </Paper>
                </Grid>
              ))
            ) : (
              <>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height="98vh"
                  padding="16px"
                >
                  <Typography variant="h4" gutterBottom color="secondary">
                    No Order history.
                  </Typography>
                </Box>
              </>
            )}
          </Grid>
        </>
      )}
    </div>
  );
};
