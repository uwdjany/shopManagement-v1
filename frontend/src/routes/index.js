import React from "react";
import {Routes,Route} from "react-router-dom";
import HomeView from "../view/Home";
import DashboardView from "../view/Dashboard";
import ProductView from "../view/product";
import UserView from "../view/users";
import PurchaseView from "../view/Purchase"
import DashRoutes from "./DashRoutes";


const MainRoutes =()=>{
    return(
        <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/login" element={<HomeView/>}/>
        <Route element={<DashRoutes/>}>
        <Route path="/user" element={<PurchaseView/>}/>
        <Route path="/dashboard" element={<DashboardView/>}/>
        <Route path="/product" element={<ProductView/>}/>
        <Route path="/sales" element={<UserView/>}/>
        </Route>
       

        </Routes>
    )

}

export default MainRoutes