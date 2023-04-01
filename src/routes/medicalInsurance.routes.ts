import { Router } from "express";
import medicalInsuranceController from "../controllers/medicaoInsurance-controller";
const medicalInsuranceRouter = Router();

medicalInsuranceRouter.get("/medical-insurance", medicalInsuranceController.getMedicalInsurance);
medicalInsuranceRouter.get("/medical-insurance/:medical_insurance_id" , medicalInsuranceController.getPlanMedicalInsurance);
export default medicalInsuranceRouter;