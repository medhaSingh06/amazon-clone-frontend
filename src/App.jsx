import './App.css'
import { HomePage } from './component/containers/HomePage'
import {Route, Routes, useNavigate} from 'react-router-dom'
import { Login } from './component/user/Login'
import {Register} from './component/user/Register'
import { Cart } from './component/cart/Cart'
import { Layout } from './component/layout/Layout'

import { Products } from './component/products/Products'
import { ProductDetail } from './component/products/ProductDetail'

import { Checkout } from './component/checkout/Checkout'

import { ErrorPage } from './component/containers/ErrorPage'
import { UseAuth } from './component/context/AuthContext'
import { Orders } from './component/checkout/Orders'
// import { CheckBox } from '@mui/icons-material'
function App() {
  
  // const token = localStorage.getItem('Atoken')
  const navigate = useNavigate();
  const {token} = UseAuth();

  // useEffect(() => {
  //   if(!token){
  //     navigate('/signIn')
  //   }
  // }, [token, navigate])
 console.log("object")

  return (
    <>
    <Layout >
      <Routes>
      <Route path='/product' element={<Products/>} />
      { token ? (
          <>

        
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/order' element={<Orders/>} />

       
        

          </>
        ) : (
          <>
          <Route path='/' element={<HomePage/>}/>
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
