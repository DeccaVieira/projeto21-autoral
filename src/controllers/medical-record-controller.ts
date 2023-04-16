import { Request, Response } from "express";
import medicalRecordService from "../services/medical-record-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";

async function PostMedicalRecordController(
  req: AuthenticatedRequest,
  res: Response
) {
  const { patient_id,
    professional_id,
    cbo_id,
    description}  = req.body;
  const objRecord = {
    patient_id,
    professional_id,
    cbo_id,
    description
  };
  try{
    await medicalRecordService.postMedicalRecord(objRecord);
return res.sendStatus(201)
  }catch(error){
    console.log(error)
  }
}

const medicalRecordController = {
  PostMedicalRecordController
};

export default medicalRecordController;
