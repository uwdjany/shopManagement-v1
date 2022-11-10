import axios from "axios";

export const getAllProductService = async () =>{
    try{
        const res = await axios.get("http://localhost:4040/v1/shop/product");
        return res;

    }catch(err){
        console.log("error:" ,err);

    }
}