import axios from "axios";

var myHeaders = new Headers();
export const getAllProductService = async () => {
  try {
    const res = await axios.get("http://localhost:4040/v1/shop/product");
    return res;
  } catch (err) {
    console.log("error: ", err);
  }
};

export const createProductService = async (data) => {
  try {
    const res = await axios.post("http://localhost:4040/v1/shop/product",data);
    return res;
  } catch (err) {
    console.log("error: ", err);
  }
};