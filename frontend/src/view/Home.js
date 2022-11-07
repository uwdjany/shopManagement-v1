import React from "react";
import "./index.css";
import { Container, Grid, Card, TextField,Button } from "@mui/material";
import { Stack } from "@mui/system";
import logo from "../assets/image/logoshop.png"
import { useNavigate } from "react-router-dom";
const styles = { background: "white", height: "100vh", width: "100%" };

const ViewComponent = (props) => {
    const navigate = useNavigate();
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
        <Grid item xs={6}></Grid>
        <Card className="sigin-container">
        <img src={logo} alt="" />
        <label className="lbl">Signin Shop Managment</label>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            <TextField
              fullWidth
              id="filled-basic"
              label="Email"
              variant="filled"
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Password"
              variant="filled"
            />
            <Button
            fullWidth
            variant="contained"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Signin
          </Button>
          </Stack>
        </Card>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};

export default ViewComponent;
