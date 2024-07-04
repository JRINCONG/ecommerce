import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetalleProduct } from '../components/ProductInfo/DetalleProduct'
import { SliderProduct } from '../components/ProductInfo/SliderProduct'
import { v4 } from 'uuid'
import { SimilarProd } from '../components/ProductInfo/SimilarProd'
import '../styles/ProductInfo.css'
import { getTiendaThunk } from '../store/slices/product.slices'


export const ProductInfo = () => {

  const product = useSelector((store)=> store.productos)
const dispatch=useDispatch();

console.log(product)
  const param = useParams();

  useEffect(()=>{

    dispatch(getTiendaThunk('products'))
  },[])
  console.log('param',param)

  console.log(param.id)
  return (
    <div className='ProductInfo_Container'>        
          {
          product?.map((item) =>(
          (+item?.id === + param?.id)&&
          <div className='Container_slider_Detalle'>
          <SliderProduct
          key={v4()}
          item={item}
          />
          <DetalleProduct
            key={item.id}
            item={item}
            
            />
           
           
            <SimilarProd
            CateID={item.categoryId}
          
            />
              </div>
          ))
        }

        
        
          </div>    
    
  )
}


