import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { newPersonal, Personal } from "../protocols/personal-data-protocol"
import personalService from "../services/personal-data-service"

async function postPersonalData(req: AuthenticatedRequest, res: Response) {
  const { medicalInsurance, medicalInsurancePlan, medicalNumber } = req.body;
  const { id } = res.locals.signin;

  const personalData : newPersonal = {
    user_id: id,
    medical_insurance: +medicalInsurance,
    medical_insurance_plan: +medicalInsurancePlan,
    medical_number: medicalNumber
  };
  
  
  try {
    console.log(personalData, "per");
    await personalService.createPersonalService(personalData)
    return res.sendStatus(200);
  } catch (error) {
    if (error.name === "titleAlreadyExist") {
      return res.status(error.code).send(error.message);
    }
  }
  return res.status(500)
}

async function getPersonalDataInsurance(req: AuthenticatedRequest, res: Response) {
  const { id } = res.locals.signin;
console.log(id, "userId");

 try {
   const personal = await personalService.getPersonalDataName(+id)
    return res.status(200).send(personal);
  } catch (error) {
    if (error.name === "dataDoesnotExist") {
      return res.status(error.code).send(error.message);
    }
  
  }
}


async function getPersonalData(req: AuthenticatedRequest, res: Response) {
  const { id } = res.locals.signin;
console.log(id, "userId");

 try {
   const personal = await personalService.getPersonalService(id)
    return res.status(200).send(personal);
  } catch (error) {
    if (error.name === "dataDoesnotExist") {
      return res.status(error.code).send(error.message);
    }
  
  }
}


const personalDataController = {
  getPersonalData, postPersonalData, getPersonalDataInsurance
}

export default personalDataController;