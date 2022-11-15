import { Navigate, Outlet } from "react-router-dom";
import Dashlayout from "../component/DashLayout";
import { useSelector } from "react-redux";

const DashRoutes = () => {
  let token = true;
  // let auth = { token: true };
  // const {token} = useSelector((state) => state.auth)

  return token ? (
    <Dashlayout>
      <Outlet />
    </Dashlayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DashRoutes;
