import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addCart, getCart } from "../api/apiHandler";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {},
    extraReducers: (builder) => {
            builder
                .addCase(fetchCart.fulfilled, (state, action) =>{
                    console.log(action.payload)
                    state.items  = action.payload.cartitems
                    state.totalPrice = action.payload.totalprice
                    state.totalQuantity = action.payload.totalquantity
                    

                })
    }
})

export const fetchCart = createAsyncThunk('cart/fetchCart', async  () => {
    try {
            const res = await getCart();
            const cartitems = res.data.cart_items
            const totalprice = res.data.total_price
            const totalquantity = res.data.total_quantity
            return {
                cartitems,
                totalprice,
                totalquantity
            };
          } catch (err) {
            console.error(err);
            throw err;
          }
     
})

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (item) => {
    try{
        const res = await addCart(item)
        console.log(res.data)
    }
    catch(err){
        console.error(err)
    }
})


export default CartSlice.reducer

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
//   try {
//     const res = await getProduct();
//     const data = res.data.products
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// })