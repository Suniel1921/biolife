import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import ProductDetails from './pages/products/ProductDetails'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products-details/:id' element={<ProductDetails/>}/>

      </Routes>
    </Router>

      
    </>
  )
}

export default App
