import React from 'react';
import '../../styles/ShowCard_HomePage.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAddCartThunk } from '../../store/slices/CartCrud.slices';


export const ShowCard_HomePage = ({ item }) => {
const navigate = useNavigate();
const dispach =useDispatch()
  const ViewCard = () => {
     navigate(`/Product/${item.id}`)
  }
  console.log(item)

  const AddCart = () =>{
  
    
  dispach(getAddCartThunk({
      "quantity": 1,
      "productId": item.id,
    }))

  }
 

  return (
        
    
      <article className='Conten_ShowCard'>
        <figure onClick={ ViewCard } className='ShowCard_img'>
          <img src={item.images[0].url}/>
        </figure>
        <hr className='ShowCard_hr'/>
        <ul className='ShowCard_listado'>
          <li className='ShowCard_items'><span className='ShowCard_items_marca'>{item.brand}</span><span className='ShowCard_items_title'>{item.title}</span></li>
          <li className='ShowCard_items'><span className='ShowCard_items_price_name'>Price</span><span className='ShowCard_items_price'>$ {item.price}</span></li>
        </ul>
        <div className='ShowCard_botones'>
        <button className='btn' onClick={ViewCard}>Details</button>
        <button className='btn' onClick={AddCart}>Add to Cart</button>
        </div>

      </article>
    
  )
}


