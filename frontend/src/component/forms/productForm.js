import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, TextField, Stack, Typography, Button } from "@mui/material";
import { createProductAction } from "../../redux/product/actions";

import LoadingButton from "@mui/lab/LoadingButton";
const Component = (props) => {
  const dispatch = useDispatch();
  const [unity, setUnity] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const { token, isFetching } = useSelector((state) => state?.auth);
  return (
    <Paper sx={{ width: "50%", padding: "5rem" }}>
      <Stack direction="column" spacing={3}>
        <Typography div="h1">Create Product</Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Unity"
          variant="outlined"
          onChange={(e) => setUnity(e.target.value)}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <LoadingButton
          loading={isFetching}
          fullWidth
          variant="contained"
          onClick={() => {
            console.log({ name, unity, description });
            createProductAction({ name, unity, description })(dispatch);
            props.setOpen(false);
          }}
        >
          Save
        </LoadingButton>
      </Stack>
    </Paper>
  );
};

export default Component;