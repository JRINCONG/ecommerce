import React from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from './page/Homepage';
import { Register } from './page/Register';
import { Login } from './page/Login';
import { Cart } from './page/Cart';
import { Purchases } from './page/Purchases';
import { ProductInfo } from './page/ProductInfo';
import { Validacion } from './page/Validacion';
import { Navbar } from '../src/shared/Navbar';
import { PageError } from './page/PageError';
 
export const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        
      <Route path = '/' element = { <Homepage/> }/>
      <Route path = '/register' element = { <Register/> }/>
      <Route path = '/Login' element = { <Login/> }/>
      <Route path = '/Product/:id' element = { <ProductInfo/> }/>
      <Route  element ={<Validacion/>}>
      <Route path = '/Purchases' element = { <Purchases/> }/>
      <Route path = '/cart' element = { <Cart/> }/>
      </Route>
      <Route path='*' element={<PageError/>}/>



      </Routes>
    </>
  )
}

