import {
  Typography,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  TablePagination,
  Box,
} from "@mui/material";
import { ProductItem } from "./ProductItem";
import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../api/apiHandler";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [totalProduct, setTotalProduct] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  const fetchProducts = useCallback(async () => {
    const newPage = +searchParams.get("page");
    const newRowsPerPage = +searchParams.get("rowsPerPage");
    const newSearch = searchParams.get("search") || "";

    if (
      newPage === page &&
      newRowsPerPage === rowsPerPage &&
      newSearch === search
    ) {
      setLoading(false);
      setInitialFetchDone(true);
      return;
    }

    setLoading(true);
    getProducts({
      page: newPage,
      rowsPerPage: newRowsPerPage,
      search: newSearch,
    }).then((res) => {
      if (res.status === 200) {
        setProducts(res.data.products);
        setTotalProduct(res.data.totalProduct);
        setPage(newPage);
        setRowsPerPage(newRowsPerPage);
        setSearch(newSearch);
        setLoading(false);
        setInitialFetchDone(true);
      }
    });
  }, [searchParams, page, rowsPerPage, search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleChangePage = (event, newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  const handleChangeRowsPerPage = (event) => {
    searchParams.set("page", 0);
    searchParams.set("rowsPerPage", event.target.value);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <Typography
        variant="h4"
        color="secondary"
        sx={{ textAlign: "center", paddingTop: "20px" }}
      >
        Product List
      </Typography>

      <TextField
        label="Search products..."
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          ),
          sx: {
            color: "white", 
            "& fieldset": { borderColor: "white" }, 
            "&:hover fieldset": { borderColor: "white" }, 
          },
        }}
        InputLabelProps={{
          sx: {
            color: "white", 
          },
        }}
        value={search}
        onChange={(e) => {
          searchParams.set("search", e.target.value);
          searchParams.set("page", 0);
          setSearchParams(searchParams);
        }}
      />

      <Grid container spacing={3}>
        {loading && !initialFetchDone ? (
          <Typography
            variant="h4"
            color="secondary"
            sx={{ textAlign: "center", paddingTop: "20px" }}
          >
            Loading...
          </Typography>
        ) : products.length > 0 ? (
          products.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Paper
                key={item.id}
                elevation={3}
                style={{ padding: "20px", margin: "10px" }}
              >
                <ProductItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                />
              </Paper>
            </Grid>
          ))
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh"
            padding="16px"
          >
            <Typography
              variant="h4"
              gutterBottom
              color="secondary"
              sx={{ paddingLeft: "200px" }}
            >
              No Products Found
            </Typography>
          </Box>
        )}
      </Grid>

      <Grid>
        {!loading && products.length ? (
          <TablePagination
            style={{ color: "white" }}
            component="div"
            count={totalProduct || 100}
            page={page || 0}
            onPageChange={handleChangePage}
            rowsPerPage={+rowsPerPage || 10}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        ) : null}
      </Grid>
    </div>
  );
};
