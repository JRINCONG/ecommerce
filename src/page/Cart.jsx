import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { CartShowItemThunk } from '../store/slices/CartCrud.slices'
import { ShowCart } from '../components/Cart/ShowCart'
import '../styles/Cart.css';
import { v4 } from 'uuid'
import { postPurchesesThunk } from '../store/slices/Purchases.slices'

let dato=0;
let num=0;
export const Cart = () => {

const CardPrduct = useSelector((store) => store.CartCrudSlices);

const dispach= useDispatch();

useEffect(()=>{

  dispach(CartShowItemThunk('/cart'))

},[])

const CantProductos = CardPrduct?.reduce((cv, item)=>cv += item.quantity, 0);

const Total= CardPrduct?.reduce((cv, item)=> cv+= item.quantity * item.product.price, 0);

console.log(CardPrduct)


const BuyPurchases = () => {
console.log('disparo')
dispach(postPurchesesThunk())

}


  return (
    <div className='Container'>
    {
      CardPrduct?.map((cart)=>(
        <ShowCart
         key={v4()}
         Cart = { cart }
   
       />
    
      ))
    }
    <div className='Cart_container_totalProductos'>
      <ul className='Cart_container_total_title'>
        <li><span>Products</span><span>{CantProductos}</span></li>
        <li><span>Total:</span><span>{Total}</span></li>
        
      </ul>
      <button className='Buy_btn' onClick={BuyPurchases}>Buy all Products</button>
    </div>
  </div>
  )
}

