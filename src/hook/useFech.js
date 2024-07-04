import axios from "axios"
import { useState } from "react"

const urlgeneral='https://e-commerce-api-v2.academlo.tech/api/v1/';

export const useFech = () => {

    const [ Category, setCategory ]=useState()

    const getCategory = (path)=>{
      const url=`${urlgeneral}${path}`
      axios.get(url)
      .then(resp => setCategory(resp.data))
      .catch(error => console.log(error))
        
    }

    

    return[Category ,getCategory ];

}


