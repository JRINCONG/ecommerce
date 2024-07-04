import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BearerToken } from "../../utils/BearerToken";


const Purchases = createSlice({

    name:'Puerchases',       
    initialState:[],
    reducers:{
        SetPurchases:(_state,action) => action.payload,
        setAddPurcheses:(state,{payload}) =>[...state, payload]
    }


})

export const  {SetPurchases, setAddPurcheses} = Purchases.actions;

export default Purchases.reducer




export const getPuerchasesThunk = () =>(dispatch) => {

  const url= `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`;
 axios.get(url,BearerToken())
 .then(resp => dispatch(SetPurchases(resp.data)))
 .catch (error => console.log(error))

}

export const postPurchesesThunk = () => (dispatch) =>{
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`;
    axios.post(url,{},BearerToken())
    .then(resp => dispatch(setAddPurcheses(resp.data)))
    .catch(error => console.log(error))

}