import React from 'react'
import '../../styles/Purchases.css';
import { useNavigate } from 'react-router-dom';

const ShowPurchases = ({ purcha }) => {

    const conversor = (date) =>{

        const fecha = date.split('T')
        return fecha[0]
      
      }
      const navigate = useNavigate()
      const ViewCard = () =>{
        navigate(`/Product/${purcha.product.id}`)
      }
    
      console.log(purcha)

  return (
    <section className='Purchases_section'  onClick={ViewCard}>
            
            <figure className='Purchases_section_img'>
               <img className='Purchases_section_img_img'src={purcha?.product?.images[0].url}/>
            </figure>
            <div className='Purchases_title'>
              <h3>{purcha?.product.title}</h3>
            </div>
            <div className='Purchases_datos_general'>
           
              <p>{conversor(purcha?.createdAt)}</p>
            
            
              <p className='Purchases_qty'>{purcha?.quantity}</p>
           
         
              <p>&#36; {purcha?.product.price}</p>
     
            </div> 
        </section> 
  )
}

export default ShowPurchases
