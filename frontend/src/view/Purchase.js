import React from "react";
import TableShop from "../component/tableShop"

const tableData=[
    {title:"Purchase Name",name:"name"},
    {title:"Price", name:"price"},
    {title:"Description", name:"description"},
    {title:"User",name:"user"},
    {title:"Product",name:"product"}
]

const ViewComponent =()=>{
    return(
        <>
        <h1>Test Purchase View</h1>
        <TableShop tableData={tableData}/>
        
        </>
     

    )
}

export default ViewComponent;