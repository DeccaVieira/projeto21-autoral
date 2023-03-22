import { Router } from "express";
import signUpRouter from "./signUp-router";

const router = Router();

router.use(signUpRouter);

export default router;