import './App.css'
import { HomePage } from './component/containers/HomePage'
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/user/Login'
import {Register} from './component/user/Register'
import { ProductPage } from './component/containers/ProductPage'
import { UserPage } from './component/containers/UserPage'
import { Cart } from './component/cart/Cart'
import { Layout } from './component/layout/Layout'
function App() {
 

  return (
    <>
    <Layout >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/signIn' element={<Login/>}/>
        <Route  path='/register' element={<Register/>} />
        <Route path='/userProfile'  element={<UserPage />}/>
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes> 
    </Layout>   
    </>
  )
}

export default App
