import React, { useEffect, useRef } from 'react'
import { useFech } from '../../hook/useFech'
import '../../styles/InputCategori.css';

export const InputCategori = ( { setBusquedaCategory }) => {


const [ Categori , getCategori ]= useFech()

useEffect(()=>{
    getCategori('categories')
},[])



console.log(Categori)

const SeleccionInput= useRef()
const Seleccion = () =>{

    setBusquedaCategory(SeleccionInput.current.value)

}



  return (
    <div>
         <select onChange={ Seleccion }  ref = { SeleccionInput } className='InputCategori'>
            <option value="" className='InputCategoriOption'>All Category</option>
             {
                
                    Categori?.map((item)=>(
    
                        <option key={item.id} value={item.id}>{item.name}</option>
    
                    ))             
    
                 
    

             } 
            

        </select>
      

      
    </div>
  )
}


