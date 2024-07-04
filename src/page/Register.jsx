import React from 'react';
import '../styles/Register.css';
import { useForm } from 'react-hook-form';
import { useUser } from '../hook/useUser';

export const Register = () => {

 const { handleSubmit, register, reset }=useForm()
 const [getRegisterUser, RespuestaRegistro, setRespuestaregistro]=useUser()

 const Submit = (data) =>{

      getRegisterUser(data)

      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
        })
 }

 console.log(RespuestaRegistro)
/*
 {
  "firstName": "john",
  "lastName": "doe",
  "email": "john@gmail.com",
  "password": "john1234",
  "phone": "1234567890"
}
*/

  return (
    <div className='Container_Form_Register'>
      
      <h1>New User</h1>
      <form className='Form_Register' onSubmit={ handleSubmit(Submit) }> 

                <div className='Form_register_firtName'>
                <label htmlFor="firstName">Firs Name</label>
                <input {...register('firstName')}type='texto' id='firstName' placeholder='Write firt Name'/>
                </div>

                <div className='Form_register_Last_name'>
                <label htmlFor="lastName">Last Name</label>
                <input {...register('lastName')}type='text' id='lastName' placeholder='write your Last Name'/>
                </div>

                <div className='Form_register_user'>
                <label htmlFor="email">Email</label>
                <input {...register('email')} type='email' id='email' placeholder='write your Email'/>
                </div>         

                <div className='Form_register_password'>
                <label htmlFor="password">Password</label>
                <input {...register('password')}type='password' id='password'/>
                </div>

                <div className='Form_register_phone'>
                <label htmlFor="phone">Phone</label>
                <input {...register('phone')}type='number' id='phone' placeholder='write your Phone'/>
                </div>     

                <div className='Form_register_btn'>
                  <button className='Form_register_btn_btn'>Login</button>
                </div>
                {
                  (RespuestaRegistro)?
                <div>
                  <h2>Successful Registration👋</h2>
                 
                </div>
                :
                <div>
                  <h2></h2>
                </div>
                
                }
          </form>
    </div>
  )
}


