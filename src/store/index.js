import { configureStore } from "@reduxjs/toolkit";
import productos from './slices/product.slices';
import CartCrudSlices from "./slices/CartCrud.slices";
import Purchases from "./slices/Purchases.slices";
import UsersSlices from "./slices/Users.slices";




export const store =  configureStore({
    reducer:{
        productos,
        CartCrudSlices,
        Purchases,
        UsersSlices,
       
    }
})