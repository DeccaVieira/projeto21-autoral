import { Request, Response } from "express";
import medicalInsuranceService from "../services/medicalInsurance-service";

async function getMedicalInsurance(req:Request, res: Response) {

 try {
   const medicalInsurance = await medicalInsuranceService.getMedicalInsuranceService();
    return res.status(200).send(medicalInsurance);
  } catch (error) {
    if (error.name === "medicalInsuranceDoesnotExist") {
      return res.status(error.code).send(error.message);
    }
  
  }
}

async function getPlanMedicalInsurance(req:Request, res: Response) {
const {medical_insurance_id} = req.params;


  try {
   const planMedicalInsurance = await medicalInsuranceService.getPlanMedicalInsuranceService(+medical_insurance_id);

     return res.status(200).send(planMedicalInsurance);
   } catch (error) {
     if (error.name === "medicalInsuranceDoesnotExist") {
       return res.status(error.code).send(error.message);
     }
   
   }
 }

const medicalInsuranceController = {
  getMedicalInsurance, getPlanMedicalInsurance
}

export default medicalInsuranceController;