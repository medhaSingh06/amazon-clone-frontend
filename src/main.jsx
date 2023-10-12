
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import store from './component/store/store'
import { ThemeProvider } from '@emotion/react'
import CustomTheme from './CustomTheme.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={CustomTheme}>
  <Provider store ={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </ThemeProvider>
)
