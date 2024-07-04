import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { getTiendaThunk } from '../store/slices/product.slices'
import { ShowCard_HomePage } from '../components/HomePage/ShowCard_HomePage'
import '../styles/HomePage.css';
import { FormProductos } from '../components/HomePage/FormProductos'
import FormPrice from '../components/HomePage/FormPrice'
import { retry } from '@reduxjs/toolkit/query'
import { InputCategori } from '../components/HomePage/InputCategori'
import { set } from 'react-hook-form'

export const Homepage = () => {

const [ inputBusqueda, setInputBusqueda ] = useState('')
const [ BusquedaPrice , setBusquedaPrice ] = useState('')
const [ BusquedaCategory, setBusquedaCategory ] = useState();
 const dispatch = useDispatch();
 const product = useSelector((store)=> store.productos)
const [ShowMenu, setShowMenu ] = useState(false);



 useEffect(()=>{
  
dispatch(getTiendaThunk('products'))
 },[])

        const Filtertext = (x)=>{

                  if(BusquedaPrice){
                    return (+x?.price >= +BusquedaPrice.from && x.price <= +BusquedaPrice.to)
                        
                  }
                  if(BusquedaCategory){
                    return(+x?.categoryId === +BusquedaCategory)
                  }

                  return x.title?.toLowerCase().includes(inputBusqueda)

        }

     const HandleMenu = ()  =>{
 setShowMenu(!ShowMenu)

     }  

     

  return (
    <div className='Conten_general'>
    
      <div className={`Form_Product ${ShowMenu && 'active' }`}>
   <button onClick={HandleMenu}className='Form_Product_btn1'>&#215;</button>
     <div className='Form_Price'>
        <FormPrice
        
        setBusquedaPrice = { setBusquedaPrice }
        />
      </div>
  
        <InputCategori
        
        setBusquedaCategory = { setBusquedaCategory }
        />
      </div>
      
      <div className='HomePage_Container'>
        
     <div className=''>
      <FormProductos
      
      setInputBusqueda = { setInputBusqueda }
      />
     </div>

     <button onClick={HandleMenu} className={`btn_btn  ${ ShowMenu && 'active'}`}>show</button>

      <div className='Contain_Card'>
      {
        product?.filter(Filtertext).map((item) =>(
        
          <ShowCard_HomePage
          key={item.id}
          item={item}
          
          />

        ))
      }
      </div>
      </div>
    </div>
  )
}


