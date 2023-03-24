import { Router } from "express";
import signUpRouter from "./signUp-router";
import { authRouter } from "./auth-router";
const router = Router();

router.use(signUpRouter);
router.use(authRouter);

export default router;