import React from 'react'
import { useForm } from 'react-hook-form'
import '../../styles/FormPrice.css';

const FormPrice = ( { setBusquedaPrice } ) => {


const {handleSubmit, register , reset } = useForm()


const Submit = (data) =>{
    const{from, to}= data
    if(from==='' && to === ''){
        data={
            from:1,
            to:Infinity,

        }
    }
   
    setBusquedaPrice(data) 
    reset({
         from:"",
         to:"",
    })

}
  return (
    <div className='Form_form_price'>
      
      <form onSubmit={ handleSubmit(Submit) } className='FormPrice_form_container'>
        <label htmlFor="from">From</label>
        <input {...register("from")} type='number' id='from'/>
        <label htmlFor="to">To</label>
        <input {...register("to")} type='number' id='to'/>
        <button className='FormPrice_form_container_btn'>Filter Price</button>
      </form>
    </div>
  )
}

export default FormPrice
