import './App.css'
import { HomePage } from './component/Pages/HomePage'
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/auth/Login'
import {Register} from './component/auth/Register'
import { Cart } from './component/cart/Cart'
import { Layout } from './layout/Layout'

import { Products } from './component/products/Products'
import { ProductDetail } from './component/products/ProductDetail'

import { Checkout } from './component/checkout/Checkout'

import { ErrorPage } from './component/Pages/ErrorPage'
import { UseAuth } from './context/AuthContext'
// import { Orders } from './component/checkout/Orders'
import {useEffect} from 'react'
import { getCart } from './api/apiHandler'
import { useDispatch } from 'react-redux'
import { fetchCart } from './store/cartSlice'
import { fetchOrder } from './store/orderSlice'
import { Order } from './component/order/Order'

// import axios from 'axios'
// import { useEffect } from 'react'
// import { CheckBox } from '@mui/icons-material'
function App() {
  

  const {token} = UseAuth();
  const dispatch =  useDispatch()
  // here it will getCart values from the 
  

  useEffect(() => {
    const fetchData = async () => {
         await dispatch(fetchCart());
        // console.log("Data fetched successfully:", cartitem);
  
        // After the first action is completed, dispatch the second action
        const orderItem =await dispatch(fetchOrder());
        console.log("Second action completed:", orderItem);
      // } catch (error) {
      //   console.error("Error in data fetching:", error);
      // }
    };
  
    fetchData();
  }, []);
  


  return (
    <>
    <Layout >
      <Routes>
      <Route path='/product' element={<Products/>} />
      <Route path='/' element={<HomePage/>}/>
      { token ? (
          <>
            <Route path='/product/:id' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            {/* <Route path='/order' element={<Orders/>} /> */}
            <Route path='/order' element={<Order/>} />
          </>
        ) : (
          <>
            <Route  path='/signIn' element={<Login/>}/>
            <Route  path='/register' element={<Register/>} />
          </>
        )}
      <Route  path='*' element={<ErrorPage/>}/>
      </Routes> 
    </Layout>   
    </>
  )
}

export default App
