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
import { Orders } from './component/checkout/Orders'
import {useEffect} from 'react'
import { getCart } from './api/apiHandler'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { CheckBox } from '@mui/icons-material'
function App() {
  

  const {token} = UseAuth();
  // getCart().then((res) => {
  //   console.log(res)
  // } ).catch((err)=>{
  //   console.log("error", err)
  // })

  // useEffect(() => {

  //   getCart()
  //   .then((response) => {
  //     // Handle the response data here
  //     console.log(response.data, "ACES");
      
  //   })
  //   .catch((error) => {
  //     // Handle errors
  //     console.error('Error:', error);
  //   });
  // }, []); // 



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
            <Route path='/order' element={<Orders/>} />
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
