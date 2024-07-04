import React, { useState } from 'react';
import '../../styles/DetalleProduct.css';
import { getAddCartThunk } from '../../store/slices/CartCrud.slices';
import { useDispatch } from 'react-redux';


export const DetalleProduct = ({item}) => {


    const [ Quantity, setQuantity ] =useState(1)
    
    console.log(item)
    const valor = item.images.length -1
  
     
  const dispach=useDispatch()     

      const sumar = () => {
        setQuantity(Quantity +1)
       }
    
       const restar =() =>{
        if(Quantity>1){
        setQuantity(Quantity - 1)
        }
       }
        console.log(valor)


        const handleAddCart = () =>{
            dispach(getAddCartThunk({
                "quantity": Quantity,
                "productId": item.id,
              }))
        }
    
  return (
    <>
       

           

            <div className='Detalle_info'>
                <div className='Detalle_title'>
                <h1>{item.brand}</h1>
                <h2>{item.title}</h2>
                </div>

                <div className='Detalle_description'>
                    <p>{item.description}</p>
                </div>
               
                <div className='Detalle_price_qty'>
                    <ul>
                        <li>Price</li>
                        <li>$ {item.price * Quantity}</li>
                    </ul>
                    <ul>
                        <li>Quantity</li>
                        <li className='Detalle_qty'><button className ='Detalle_restar' onClick={restar}>&#8722;</button><span>{Quantity}</span><button className='Detalle_sumar' onClick={sumar}>&#43;</button></li>

                    </ul>
                </div>
                <div className='Detalle_btn'>
                    <button onClick={handleAddCart}className='btn_Detalle'>Add to Cart</button>
                </div>

            </div>

       
      
    </>
  )
}


