import { Router } from "express";
import * as UserController from "../controller/userController";
import { checkUser, loginUser } from "../middleware/checkUserExist";
import { verifyUserToken } from "../middleware/verifyToken";
const route = Router();
route.post("/login", loginUser);

route
  .route("/")
  .post(checkUser, UserController.createController)
  .get(UserController.getAllController);
// route.use(verifyUserToken);
route
  .route("/:id")
  .patch(UserController.updateOneController)
  .get(UserController.getOneController)
  .delete(UserController.deleteOneController);

export default route;
