import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          itemName: newItem.itemName,
          price: newItem.price,
          description: newItem.description,
          imageURL: newItem.imageURL
        });
        
      } else {
        // eslint-disable-next-line no-unused-expressions
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find( (item) => item.id === id)
      state.totalPrice = state.totalPrice - existingItem.price
      state.totalQuantity--

      if(existingItem.quantity === 1)
      {
        state.items = state.items.filter( (item) =>  item.id !== id)
      }
      else
      {
        existingItem.quantity--
      }
    },
    removeEntireItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find( (item) => item.id === id)
      state.totalPrice = state.totalPrice - (existingItem.price* existingItem.quantity)
      state.totalQuantity = state.totalQuantity - existingItem.quantity
      state.items = state.items.filter((item)=> item.id !== id)
    }}
    
  },
);



export const cartActions = CartSlice.actions
export default CartSlice.reducer
