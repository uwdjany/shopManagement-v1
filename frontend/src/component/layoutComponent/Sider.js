import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Stack,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const sideMenus = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    title: "Products",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/product",
  },
  {
    title: "Purchases",
    icon: <MonetizationOnIcon />,
    path: "/purchase",
  },
  {
    title: "Sales",
    icon: <ReceiptIcon />,
    path: "/sales",
  },
  {
    title: "Users",
    icon: <GroupIcon />,
    path: "/user",
  },
];
const Component = (props) => {
  const navigate = useNavigate();
  const [selectedItemIndex,setSelectedItemIndex] = useState(0)
  return (
    <Card sx={{ minHeight: "100vh" }}>
      <Paper sx={{ minHeight: "3rem" }}></Paper>
      <MenuList>
        <Stack spacing={4} justifyContent="center">
          {sideMenus?.map((menu,index) => (
            <MenuItem onClick={() => {setSelectedItemIndex(index);navigate(menu.path)}} selected={selectedItemIndex === index}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <Typography variant="inherit">{menu.title}</Typography>
            </MenuItem>
          ))}
        </Stack>
      </MenuList>
    </Card>
  );
};

export default Component;