import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth"
import product from "./product"

const store = configureStore({

    reducer:{
auth:auth,
product:product


    }
});

export default store;