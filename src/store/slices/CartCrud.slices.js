import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../utils/BearerToken";




const Cart = createSlice({

    name:'Cart',
    initialState:[],
    reducers:{
        setCartShow:(_state, action) =>  action.payload,
        setCartAdd:(state,{payload}) => [{...state, payload}],
        setDeleteCart:(state,{payload}) => [...state].filter((item)=>(item.id !== payload )),
        setUpdateCart:(state,{payload}) => [...state].forEach((item)=> (item.id === payload.id ? item.quantity = payload.quantity : item))
           
        
    }

})




export const  {setCartShow, setCartAdd, setDeleteCart, setUpdateCart} = Cart.actions;
export default Cart.reducer;




export const CartShowItemThunk = (path) => (dispatch) =>{

    const url =`https://e-commerce-api-v2.academlo.tech/api/v1${path}`
    console.log(url)
    axios.get(url,BearerToken())
    .then(resp => dispatch(setCartShow(resp.data)))
    .catch(error => console.log(error))
}



export const getAddCartThunk = (data)=> (dispatch)=>{
    
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';
    axios.post(url, data, BearerToken())
    .then( resp => dispatch(setCartAdd(resp.data)))
    .catch(error => console.log(error))

}


export const getDeleteCartThunk = (id) => (dispatch) =>{
 
  const url =`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios.delete(url,BearerToken())
    .then(resp => dispatch(setDeleteCart(id)))
    .catch(error => console.log(error))

}


export const getUpdateCartThunk = (id,data) => (dispatch) => {
   console.log(id)
   console.log(data)
    const url =`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
    axios.put(url,data,BearerToken())
    .then(resp => dispatch(setUpdateCart(resp.data)))
    .catch(error => console.log(error))

}