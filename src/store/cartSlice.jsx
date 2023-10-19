import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import {
  addCart,
  getCart,
  removeAllCart,
  removeFromCart,
  updateCart,
} from "../api/apiHandler";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.rejected, (state) => {
        state.items = [];
        state.totalPrice = 0;
        state.totalQuantity = 0;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        for (const item of action.payload.cart_items) {
          const val = {
            ProductId: item.product_id,
            ProductName: item.product_name,
            quantity: item.quantity,
            ProductPrice: item.price_per_unit,
            total_price: item.price_per_unit * item.quantity,
            image: item.image,
          };
          state.items.push(val);
        }
        state.totalPrice = action.payload.total_price;
        state.totalQuantity = action.payload.total_quantity;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const newItem = action.payload;
  
        const existingItem = state.items.find(
          (item) => item.ProductId === newItem.ProductId
        );
        state.totalPrice = state.totalPrice + newItem.total_price;
        state.totalQuantity++;

        if (!existingItem) {
          state.items.push(newItem);
        } else {
          existingItem.quantity++;
          existingItem.total_price =
            existingItem.total_price + newItem.total_price;
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        const ProductId = action.payload.ProductId;

        const existingItem = state.items.find(
          (item) => item.ProductId === ProductId
        );
        state.totalPrice = state.totalPrice - existingItem.total_price;
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
        state.items = state.items.filter(
          (item) => item.ProductId !== ProductId
        );
      })

      .addCase(updateItemOfCart.fulfilled, (state, action) => {
        const val = action.payload;

        for (const item of state.items) {
          if (item.ProductId === val.ProductId) {
            if (item.quantity > val.quantity) {
              item.quantity--;
              item.totalPrice -= item.ProductPrice;
              state.totalPrice -= item.ProductPrice;
              state.totalQuantity--;
            } else {
              item.quantity++;
              item.totalPrice += item.ProductPrice;
              state.totalPrice += item.ProductPrice;
              state.totalQuantity++;
            }
          }
        }
      })

      .addCase(removeAllItemsFromCart.fulfilled, (state) => {
        state.items = [];
        state.totalPrice = 0;
        state.totalQuantity = 0;
      });
  },
});
export default CartSlice.reducer;

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const res = await getCart();

    const values = res.data;

    return values;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item) => {
    try {
      const res = await addCart(item);

      const val = res.data.items;

      return val;
    } catch (err) {
      throw new Error("Failed to add item to cart");
    }
  }
);
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (ProductId) => {
    try {
      const res = await removeFromCart(ProductId);

      if (res.status === 200) {
        const val = res.data.item;

        return val;
      } else {
        throw new Error("Failed to remove item from cart");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const updateItemOfCart = createAsyncThunk(
  "cart/updateItemOfCart",
  async (item) => {
    try {
      await updateCart(item);

      return item;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const removeAllItemsFromCart = createAsyncThunk(
  "cart/removeAllItemsFromCart",
  async () => {
    try {
      const res = await removeAllCart();
      return res;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);
