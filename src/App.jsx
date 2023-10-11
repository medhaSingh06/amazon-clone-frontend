import './App.css'
import { HomePage } from './component/containers/HomePage'
import {Route, Routes} from 'react-router-dom'
import { Login } from './component/user/Login'
import {Register} from './component/user/Register'
import { UserProfile } from './component/user/UserProfile'
import { Products } from './component/products/Products'
import { ProductPage } from './component/containers/ProductPage'
import { UserPage } from './component/containers/UserPage'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/signIn' element={<Login/>}/>
        <Route  path='/register' element={<Register/>} />
        <Route path='/userProfile'  element={<UserPage />}/>
        <Route path='/products' element={<ProductPage/>} />
      </Routes>    
    </>
  )
}

export default App
