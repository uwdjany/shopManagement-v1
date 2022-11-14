import React from "react";
import TableShop from "../component/tableShop";


const tableData =[
    {title:"Product Name",name:"name"},
    {title:"Unity",name:"unity"},
    {title:"Status",name:"isActive"}
]
const ViewComponent =()=>{
    return(
       <>
       <h1>Test Product View</h1>
       <TableShop tableData={tableData}/>
       
       </>
    )
}

export default ViewComponent;