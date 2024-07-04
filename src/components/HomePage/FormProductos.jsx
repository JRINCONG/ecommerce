import React, { useRef } from 'react'
import '../../styles/FromProductos.css';

export const FormProductos = ( { setInputBusqueda }) => {

const InputBuscar = useRef();
    const Buscar = () =>{
        setInputBusqueda(InputBuscar.current.value.trim().toLowerCase())
    }


  return (
    <div className='From_Productos_container'>
      <form onSubmit={Buscar} className='From_Productos_form'>  
        <input type='text' onChange={ Buscar } ref={InputBuscar} placeholder='What are You Looking for ?'/>
        <button>🔍</button>
      </form>
    </div>
  )
}

