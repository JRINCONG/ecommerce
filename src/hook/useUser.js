import axios from "axios";
import { useState } from "react"





const Ruta ='https://e-commerce-api-v2.academlo.tech/api/v1'

export const useUser = () =>{
             
        
            const [ Respuestaregistro, setRespuestaregistro ] = useState();

            const getRegisterUser = (dato)=>{
                const url=`${Ruta}/users`;
                 axios.post(url,dato)
                .then(resp => {
                    console.log(resp.data)
                    setRespuestaregistro(true)
                })
                .catch(error => {console.log(error)
                    setRespuestaregistro(false)
                })  
                
            }        

       
   return [getRegisterUser, Respuestaregistro , setRespuestaregistro]


}


export const useLogin = async(data) =>{

    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/users/login`
    await axios.post(url,data)
    .then(resp => {
     
        window.localStorage.setItem('token',resp.data.token)
    })
    .catch(error => console.log(error))


    }