import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { useForm } from 'react-hook-form';
import { useUser, useLogin } from '../hook/useUser';
import { skipToken } from '@reduxjs/toolkit/query';
import { getUserThunk } from '../store/slices/Users.slices';
import { useDispatch } from 'react-redux';

export const Login = () => {


  const [ LogOut, setLogOut ]=useState(false);

const navigate = useNavigate()
  const [  , , , Login,getLogin] =useUser()
  
  const {handleSubmit, register, reset} = useForm()

 const respuesta= window.localStorage.getItem('token') 


useEffect(()=>{
  setLogOut(window.localStorage.getItem('token'))
  
},[respuesta])




          const Submit = async (data) =>{
             await useLogin(data);
            reset({
              email:'',
              password:'',
            })
            console.log('pasoooooooo')
            setLogOut(window.localStorage.getItem('token'))
            dispatch(getUserThunk())
          }

const dispatch=useDispatch();



const  DeleteToken = () =>{
  window.localStorage.removeItem('token')
  
  setLogOut(false)
  dispatch(getUserThunk())
}

  return (
    <div className='Container_Form_login'>

          {
            (LogOut) ? <button className='' onClick={DeleteToken}>LogaOut</button>
          
           :
           <>             
          <h4><strong>Welcome! Enter your email and password to continue</strong></h4>         

        <form className='Form_login' onSubmit={handleSubmit(Submit)}>       
     
          <div className='Form_login_user'>
          <label htmlFor="email">Email</label>
          <input {...register('email')}type='email' id='email' placeholder='write your User'/>
          </div>
          <div className='Form_login_password'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type='password' id='password'/>
          </div>
          <div className='Form_login_btn'>
            <button className='Form_login_btn_btn'>Login</button>
          </div>
          <div className='Form_login_Link'>
            <p><strong>Don't have an account?</strong> <Link to ='/register'>Click here</Link></p>
          </div>        

          </form> 
          </> 
         }
        
  
    </div>
  )
}

