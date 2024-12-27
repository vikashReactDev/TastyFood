import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Store/CartSlice"
import SearchSlice from "../Store/SearchSlice"
import CategorySlice from "./CategorySlice";
let Store = configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        search:SearchSlice,


    }
});
 export default Store;