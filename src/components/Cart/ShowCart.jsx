import React, { useEffect } from 'react';
import '../../styles/ShowCart.css';
import { v4 } from 'uuid';
import { getDeleteCartThunk, getUpdateCartThunk } from '../../store/slices/CartCrud.slices';
import { useDispatch } from 'react-redux';


let contador=[];
let CantProductos=0;
export const ShowCart = ({Cart}) => {


let mas = 1;
const dispach = useDispatch();


 const DeleteCart = () => {

   dispach(getDeleteCartThunk(Cart.id))
   
 }

 

 const Menos = () =>{

    mas = Cart.quantity - 1
    if(mas >= 1)

   dispach(getUpdateCartThunk(Cart.id,

    {
        "quantity":mas
    }
   ))
   
 }

 

 const Moor = () =>{

    mas += Cart.quantity
    if(mas > Cart.quantity)

   dispach(getUpdateCartThunk(Cart.id,

    {
        "quantity":mas
    }
   ))
 }

 
    
  return (

    <>
       
        {
          

            <section className='Cart_section'>
            
                <figure className='Cart_section_img'>
                   <img src={Cart?.product.images[0].url}/>
                </figure>
                
                <div className='Cart_section_name_Qty'>
                <div className='Cart_section_name_Qty_title'><p>{Cart?.product?.title}</p></div>
                        <div className='Cart_section_name_Qty_qty'>
                        <p onClick={Menos} className='Cart_section_menos'>&#8722;</p>
                        <div>{Cart?.quantity}</div>
                        <p onClick={Moor}className='Cart_section_mas'>&#43;</p>
                        </div>
                </div>
                <div className='Cart_section_btn'>
               <button className='Cart_section_btn_btn' onClick={DeleteCart}> <ion-icon name="trash-outline"></ion-icon></button>               
                </div>
                <div className='Cart_section_total'>
                    <ul className='Cart_section_total_item'>
                        <li className='Cart_section_total_title'>Total</li>
                        <li>&#36;{Cart?.product?.price * Cart.quantity}</li>
                    </ul>
                </div>
                


            </section>      
      

        }
                
    </>
  )
}


