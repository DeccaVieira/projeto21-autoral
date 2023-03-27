import { Router } from "express";
import signUpRouter from "./signUp.routes";
import { authRouter } from "./auth.routes";

const router = Router();

router.use(signUpRouter);
router.use(authRouter);


export default router;