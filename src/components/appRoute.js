import React from 'react'
import { Home } from '../pages/Home'
import { Footer } from './Footer'
import Header from './Header'

export const AppRoute = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}
