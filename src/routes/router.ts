import { Router } from "express";
import signUpRouter from "./signUp.routes";
import { authRouter } from "./auth.routes";
import professionalRouter from "./professionalRegistration.routes";
import personalRouter from "./personalData.routes";

const router = Router();

router.use(signUpRouter);
router.use(authRouter);
router.use(professionalRouter);
router.use(personalRouter);

export default router;