import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addOrder, getOrder } from "../api/apiHandler"

const initialOrderState = {
    
    orderDetails: [],
    loading: false
}

// only two cases-- get order and add order

const OrderSlice = createSlice({
    name: 'order',
    initialState: initialOrderState,
    reducers: {},
    extraReducers: (builder) => {
                builder
                .addCase(fetchOrder.rejected, (state, action) => {
                    state.orderDetails = []
                })
                .addCase(fetchOrder.pending, (state, action) => {
                    state.loading = true
                })
                    .addCase(addOrderToOrder.fulfilled, (state, action) => {
                        console.log(action.payload.ordersData)
                        for(const item of action.payload.ordersData)
                        {
                            state.orderDetails.push(item)
                        }
                    })
                .addCase(fetchOrder.fulfilled, (state, action) => {
                    console.log(action.payload, "FETECHED FROM SLICE")
                    state.orderDetails.push(...action.payload.orders)
                    state.loading = false
                    

                })
    }
})


export default OrderSlice.reducer

export const fetchOrder = createAsyncThunk('order/fetchOrder', async () => {
    try {
        const res = await getOrder()
        console.log(res, "FETCHED ORDER")
        const val = res.data
        return val

    } catch (err) {
        console.log(err)
    }
} )


export const addOrderToOrder = createAsyncThunk('order/addOrder', async (item) => {
    try {
        const res = await addOrder(item)
        console.log(res)
        const val = res.data
        return val;
    } catch (err) {
        console.log(err, "error in adding order")
    }

})