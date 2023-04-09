import { Request, Response } from "express";
import cboService from "../services/cbo-service";

async function getCbo(req:Request, res: Response) {

 try {
   const cbos = await cboService.getMedicalInsuranceService()
   return res.status(200).send(cbos);
  } catch (error) {
    if (error.name === "medicalInsuranceDoesnotExist") {
      return res.status(error.code).send(error.message);
    }
  
  }
}
const cboController = {
  getCbo
};
export default cboController;