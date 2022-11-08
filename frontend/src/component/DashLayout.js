import React from "react";
import Sider from "./layoutComponent/Sider";
import TopNav from "./layoutComponent/TopNav";
import { Card, Grid } from "@mui/material";
import { Stack } from "@mui/system";

const Component = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={3} sm={2}>
        <Sider />
      </Grid>
      <Grid item xs={9} sm={10}>
        <Stack spacing={1}>
          <TopNav />
          <Card sx={{ minHeight: "90vh", paddingLeft: "1rem" }}>
            {props.children}
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Component;
