/* eslint-disable react/prop-types */
import { TableCell, TableRow, Typography } from "@mui/material";

export const OrderProducts = (props) => {
  const { productName, productPrice } = props;

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body2">{productName}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{productPrice}</Typography>
      </TableCell>
    </TableRow>
  );
};
