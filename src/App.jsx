import './App.css'
import { HomePage } from './component/containers/HomePage'
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/user/Login'
import {Register} from './component/user/Register'
import { Cart } from './component/cart/Cart'
import { Layout } from './component/layout/Layout'
import { UserProfile } from './component/user/UserProfile'
import { Products } from './component/products/Products'
import { ProductDetail } from './component/products/ProductDetail'
import { AddressForm } from './component/checkout/AddressForm'
import { Payment } from './component/checkout/Payment'
import { Review } from './component/checkout/Review'
import { Checkout } from './component/checkout/Checkout'
// import { CheckBox } from '@mui/icons-material'
function App() {
 

  return (
    <>
    <Layout >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/signIn' element={<Login/>}/>
        <Route  path='/register' element={<Register/>} />
        <Route path='/userProfile'  element={<UserProfile/>}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/address' element={<AddressForm/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route  path='/review' element={<Review/>}/>
      </Routes> 
    </Layout>   
    </>
  )
}

export default App
