import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import { addCart, getCart, removeFromCart } from "../api/apiHandler";

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
                    // console.log(action.payload)
                    state.items  = action.payload.cartitems
                    state.totalPrice = action.payload.totalprice
                    state.totalQuantity = action.payload.totalquantity
                    })
                .addCase(addItemToCart.fulfilled, (state, action) => {
                    console.log(action.payload)
                    // console.log(state.items)
                })
                .addCase(removeItemFromCart.fulfilled, (state, action) => {
                    console.log(action.payload)
                    
                    state.items = state.items.filter(item => item.product_id !== action.payload.id)
                    const removedItem = state.items.find(item => item.product_id === action.payload.id);
                    if (removedItem) {
                        state.totalQuantity -= action.payload.quantity;
                        state.totalPrice -= action.total_price;
                    } else {
    // Handle the case where the last item was removed, and the cart is now empty
                    state.totalQuantity = 0;
                    state.totalPrice = 0;
                    }     
                    // state.totalQuantity = state.totalQuantity - action.payload.quantity
                    // state.totalPrice = state.totalPrice - action.payload.total_price
                    
                })

                
    }
})

// CartId
// : 
// 3
// ProductId
// : 
// 27
// createdAt
// : 
// "2023-10-15T20:11:51.000Z"
// id
// : 
// 21
// quantity
// : 
// 1
// total_price
// : 
// 12.99
// updatedAt
// : 
// "2023-10-15T20:11:51.000Z"

export const fetchCart = createAsyncThunk('cart/fetchCart', async  () => {
    try {
            const res = await getCart()
            const values = {
                cartitems: res.data.cart_items,
                totalprice: res.data.total_price,
                totalquantity: res.data.total_quantity
            }
            return values
          } catch (err) {
            console.error(err);
            throw err;
          }
     
})

// export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (item) => {
//     try{
//         console.log(item)
//         const res = await addCart(item)
//         console.log("helloo")
//         console.log(res, 'RES')
//         return res;
//     } catch (err){
//         console.error(err)
//     }
// })

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (item) => {
    
        console.log(item)
        const res = await addCart(item)
        console.log("ehlo")
        return res
    
})
export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (ProductId) => {
    try {
        const res = await removeFromCart(ProductId);
        console.log(res)
        // Check the response for success or other relevant data
        if (res.status === 200) {
            console.log("vewfdcs")
            const val = res.data.product
            return val;
        } else {
            throw new Error('Failed to remove item from cart');
        }
    } catch (err) {
        console.error(err);
        throw err; // Re-throw the error so it can be caught by the `.catch` block when dispatched
    }
});


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