import { Router } from "express";
import medicalRecordController from "../controllers/medical-record-controller";
import tokenAuthentication from "../middlewares/authentication-middleware";

const medicalRecordRouter = Router();

medicalRecordRouter.post(
  "/medical-record",
  tokenAuthentication,
  medicalRecordController.PostMedicalRecordController
);

export default medicalRecordRouter;
