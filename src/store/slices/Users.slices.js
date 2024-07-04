import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { BearerToken } from "../../utils/BearerToken";



const Users = createSlice({
         name:'Users',
         initialState:'',
         reducers:{
            setUsers:(_state, action)=> action.payload,
         }
})
export const {setUsers}=Users.actions
export default Users.reducer





export const getUserThunk = () => (dispach) =>{
 const url=`https://e-commerce-api-v2.academlo.tech/api/v1/users/me`;
 axios.get(url,BearerToken())
 .then(resp=> dispach(setUsers(resp.data)))
 .then(error => console.log(error))

}