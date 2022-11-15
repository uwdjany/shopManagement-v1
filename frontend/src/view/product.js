import React, { useEffect, useState } from "react";
import TableShop from "../component/tableShop";
import { Stack, Button, Modal } from "@mui/material";
// import { getPatient } from "../redux/product/services";
import ProductForm from "../component/forms/productForm";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductAction } from "../redux/product/actions";
const tableData = [
  { title: "Product Name", name: "name" },
  { title: "Unity", name: "unity" },
  { title: "Description", name: "description" },
  { title: "Status", name: "isActive" },
];
const ViewComponent = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { products, isFetching } = useSelector((state) => state.product);

  useEffect(() => {
    getAllProductAction()(dispatch);
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        <ProductForm setOpen={setOpen}/>
      </Modal>
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <h1> Test Product View</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>
          {" "}
          Create Product
        </Button>
      </Stack>
      <TableShop tableData={tableData} items={products} />
    </>
  );
};

export default ViewComponent;