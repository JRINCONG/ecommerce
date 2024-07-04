import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const productos = createSlice({
    name: 'productos',
    initialState: null,
    reducers:{

        setPrduct:(_state, action)=> action.payload,

        
    }

})
export const { setPrduct, setAddCar }=productos.actions
export default productos.reducer

const dispatch=useDispatch;

export const getTiendaThunk = (path)=>(dispatch)=>{
    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/${path}`;
    axios.get(url)
    .then(resp=> dispatch(setPrduct(resp.data)))
    .catch(error => console.log(error))
}









