import { Router } from "express";
import signUpController from "../controllers/signUp-controllers";
import middlewareSignUp from "../middlewares/signUp-middleware";

const signUpRouter = Router();

signUpRouter.post("/sign-up", middlewareSignUp.validateSignUp, signUpController.signUp);

export default signUpRouter;