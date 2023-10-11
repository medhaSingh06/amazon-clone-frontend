import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const res = await fetch('http://localhost:3001/product')
    const data = await res.json()
    // console.log(data, "FETCHED DATA")
    return data;
  }
);