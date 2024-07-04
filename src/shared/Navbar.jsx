import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { getUserThunk } from '../store/slices/Users.slices'

export const Navbar = () => {

const usert = useSelector((store)=>store.UsersSlices)

const dispach = useDispatch()

useEffect(()=>{

  dispach(getUserThunk())


},[])

const Loga_out = () =>{


}


const navigate= useNavigate()
    const Atras =() =>{
          navigate('/')
    }
  return (
    <div className='Navbar'>
        <h1 onClick={Atras}>E-Commerce</h1>
        <div>
        <ul className='Navbar_menu'>
        
           <li><Link to = '/login'> <ion-icon name="person-add-outline">Login</ion-icon></Link></li>      
            <li><Link to ='Purchases'><ion-icon name="bag-remove-outline"> Prchceses </ion-icon></Link></li>
            <li><Link to ='/cart'><ion-icon name="cart-outline">Cart</ion-icon></Link></li>
            <p onClick={Loga_out}>{(usert.firstName )? usert?.firstName +' '+ usert?.lastName : ''}</p>
        </ul>
        </div>
    </div>
  )
}

