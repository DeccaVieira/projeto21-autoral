import { Router } from "express";
import signUpRouter from "./signUp.routes";
import { authRouter } from "./auth.routes";
import professionalRouter from "./professionalRegistration.routes";
import personalRouter from "./personalData.routes";
import medicalInsuranceRouter from "../routes/medicalInsurance.routes";
import cboRouter from "./cbo.routes";
import scheduleRouter from "./schedule.routes";

const router = Router();

router.use(signUpRouter);
router.use(authRouter);
router.use(professionalRouter);
router.use(personalRouter);
router.use(medicalInsuranceRouter);
router.use(cboRouter);
router.use(scheduleRouter);

export default router;