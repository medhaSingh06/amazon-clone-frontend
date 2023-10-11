import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <main className='content'>{children}</main>
        <Footer />
    </div>
  )
}
