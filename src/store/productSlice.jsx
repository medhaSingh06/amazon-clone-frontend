import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../api/apiHandler";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const initialProductState = {
  data: [],
  status: STATUS.IDLE
};

const ProductSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = STATUS.LOADING
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.data = action.payload
          state.status = STATUS.IDLE
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.status = STATUS.ERROR
        })

  },
});


export const productActions = ProductSlice.actions
export default ProductSlice.reducer

// THUNK
export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
  try {
    const res = await getProduct();
    const data = res.data.products
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
})