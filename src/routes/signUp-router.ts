import { Router } from "express";
import middlewareSignUp from "../middlewares/signUp-middleware";
import signUpController from "../controllers/signUp-controllers";

const signUpRouter = Router();

signUpRouter.post("/sign-up", middlewareSignUp.validateSignUp, signUpController.signUp);

export default signUpRouter;