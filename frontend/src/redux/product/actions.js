import { productActions } from "./index";
import { getAllProductService, createProductService } from "./services";

export const getAllProductAction = () => async (dispatch) => {
  dispatch(productActions.setIsFetching(true));
  try {
    const res = await getAllProductService();
    if (res?.status === 200) {
      dispatch(productActions.setIsFetching(false));
      dispatch(productActions.setProducts(res?.data));
    }
    dispatch(productActions.setIsFetching(false));
  } catch (error) {
    console.log("Error: " + error);
  }
};

export const createProductAction = (data) => async (dispatch) => {
  dispatch(productActions.setIsFetching(true));
  try {
    const res = await createProductService(data);
    if (res?.status === 201) {
      const resAll = await getAllProductService();
      dispatch(productActions.setIsFetching(false));
      dispatch(productActions.setProducts(resAll?.data));
    }
    dispatch(productActions.setIsFetching(false));
  } catch (error) {
    console.log("Error: " + error);
  }
};