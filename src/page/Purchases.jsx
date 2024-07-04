import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { getPuerchasesThunk } from '../store/slices/Purchases.slices';
import '../styles/Purchases.css';
import { useNavigate } from 'react-router-dom';
import ShowPurchases from '../components/Purchases/ShowPurchases';
import { v4 } from 'uuid';

export const Purchases = () => {

const Purcha = useSelector((store) => store.Purchases);

const dispach=useDispatch();

useEffect(()=>{

dispach(getPuerchasesThunk())


},[])



  const ViewCard = () =>{
    navigate(`/Product/${item.id}`)
  }




console.log(Purcha)

  return (
    < div className='Container_purchases'> 
    <div className='Purchases_purchases'>
    <h2>My Purchases</h2>
    </div>
       {
           Purcha.map((purcha)=>(
           

            <ShowPurchases
             key={v4()}
             purcha={purcha}            
            />

           ))

   
    }
    </div>

  )
}

