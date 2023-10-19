import { useEffect, useState } from "react";
import { UseAuth } from "../../context/AuthContext";
import { Typography, Box } from "@mui/material";
import { countOrders, getUser } from "../../api/apiHandler";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const [user, setUser] = useState();
  const [orderCount, setOrderCount] = useState();

  const { token } = UseAuth();
  const quantity = useSelector((state) => state.cart.totalQuantity);
  useEffect(() => {
    getUser()
      .then((res) => {
        const firstName = res.data.userData.first_name;
        setUser(firstName.charAt(0).toUpperCase() + firstName.slice(1));

        countOrders().then((res1) => {
          console.log(res1, "res1");
          setOrderCount(res1.data.order_count);
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!token ? (
        <>
          <Typography variant="h4" color="secondary" align="center">
            Welcome
            <Typography variant="subtitle1" color="secondary">
              to the techMart
            </Typography>
          </Typography>
        </>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="100vh"
          padding="16px"
        >
          <Typography variant="h4" color="secondary" align="center">
            {token ? `Welcome ${user}` : "Welcome Guest"}
            <Typography variant="subtitle1" color="secondary">
              to the techMart
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            align="center"
            style={{ marginTop: "20px" }}
          >
            Cart Items: {quantity}
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            align="center"
            style={{ marginTop: "20px" }}
          >
            Orders Placed: {orderCount}
          </Typography>
        </Box>
      )}
    </>
  );
};
