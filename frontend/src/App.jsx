import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import ProductDetails from './pages/products/ProductDetails';
import { Toaster } from 'react-hot-toast';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Cart from './pages/cart/Cart';


const App = () => {

  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products-details/:id' element={<ProductDetails/>}/>
            <Route path='/products' element={<Products />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            {/* protected route */}
            <Route element={<ProtectedRoute />}>    
                <Route path='/cart' element={<Cart />} />
            </Route>

        </Routes>
        <Toaster />
    </Router>
    </>
  )
}

export default App



