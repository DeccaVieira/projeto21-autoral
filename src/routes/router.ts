import { Router } from "express";
import signUpRouter from "./signUp.routes";
import { authRouter } from "./auth.routes";
import professionalRouter from "./professionalRegistration.routes";
const router = Router();

router.use(signUpRouter);
router.use(authRouter);
router.use(professionalRouter);


export default router;