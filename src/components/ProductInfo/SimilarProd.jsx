import React from 'react'
import { useSelector } from 'react-redux'
import { ShowCard_HomePage } from '../HomePage/ShowCard_HomePage'
import { useNavigate } from 'react-router-dom';
import '../../styles/SimilarProd.css';
import { v4 } from 'uuid';

export const SimilarProd = ({ CateID }) => {

  const product = useSelector((store)=> store.productos)
const navigate = useNavigate()
  const ViewCard = () =>{
    navigate(`/Product/${item.id}`)
  }

  console.log( CateID )
  return (
    <div className='Container_siliarProduct'>
      {
        product.map((item)=>(
            (+item.categoryId === CateID)&&
             
          <ShowCard_HomePage
          key={v4()}
          item={item}          
          />
        ))
      }

     
    </div>
  )
}


