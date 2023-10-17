import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getOrder } from "../api/apiHandler"

const initialOrderState = {
    items: [],
    totalOrders:0
}

// only two cases-- get order and add order

const OrderSlice = createSlice({
    name: 'order',
    initialState: initialOrderState,
    reducers: {},
})


export default OrderSlice.reducer

export const fetchOrder = createAsyncThunk('order/fetchOrder', async () => {
    try {
        const res = await getOrder()
        console.log(res, "FETCHED ORDER")
    } catch (err) {
        console.log(err)
    }
} )