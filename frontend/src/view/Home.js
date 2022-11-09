import React, { useEffect, useState } from "react";
import { Container, Grid, Card, TextField, Stack, Button } from "@mui/material";
import "./index.css";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { loginAction } from "../redux/auth/actions";
import logo from "../assets/image/logo.webp";
const styles = { width: "100%", height: "100vh" };
const ViewComponent = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const {token,isFetching} = useSelector((state)=>state?.auth)

  const login = ()=>{
    loginAction({email,password})(dispatch);
   

  }
  useEffect(()=>{
    if(token){
      navigate("/dashboard")
    }

  },[token])
  return (
    <Container sx={styles}>
      <Grid
        sx={styles}
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sm={3} xs={0}></Grid>
        <Grid item sm={6} xs={12}>
          <Card className="signin_container">
            <Stack spacing={2} alignItems="center" justifyContent="center">
              <img src={logo} alt="logo" />
              <label>Signin Shop Managment</label>

              <TextField
                fullWidth
                id="filled-basic"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
              />
              <LoadingButton
              loading={isFetching}
                fullWidth
                variant="contained"
                onClick={() => {
                  // navigate("/dashboard");
                  console.log({ email,password });
                  login()
                }}
              >
                Signin
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid item sm={3} xs={0}></Grid>
      </Grid>
    </Container>
  );
};

export default ViewComponent;
