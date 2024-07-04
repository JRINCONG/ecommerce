import React, { useState } from 'react'
import '../../styles/SliderProduct.css'






export const SliderProduct = ({item}) => {

    const [ ImgSlide, setImgSlide ] = useState(0)
const valor= item.images.length -1
   console.log(item)
const Siguiente = () =>{
    if (ImgSlide < valor ){
        console.log(ImgSlide )
        setImgSlide(ImgSlide + 1)
      }else{
        setImgSlide(0)
      }
      
    }
    
    const Anterior = () => {
      if(ImgSlide < valor && ImgSlide > 0){
        setImgSlide(ImgSlide -1 )
      }else{
        setImgSlide(2)
      }
    }

   

  return (
  
         <div className='Detalle_slide'>
           
          
            <figure className='Detalle_slide_img'>
                <div className='Detalle_siguiente' onClick={Siguiente}>&#8249;</div>
                     <img src={item.images[ImgSlide].url} width="100" height="100"/>
                <div className='Detalle_anterior' onClick={Anterior}>&#8250;</div>
                
            </figure>

            </div>
    
  )
}


