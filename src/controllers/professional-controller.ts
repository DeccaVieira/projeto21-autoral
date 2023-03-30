import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import tokenAuthentication from "../middlewares/authentication-middleware";
import professionalService from "../services/professional-service";

async function postProfessional(req: Request, res: Response) {
  const {  name, email,
cpf, ufRegistration,
  registrationType,
  professionalNumber,
  phoneNumber } = req.body;

  const professionalData = {
    name,
    email,
    cpf,
    ufRegistration,
    registrationType,
    professionalNumber:+professionalNumber,
    phoneNumber
  };
  try {
    console.log(professionalData, "controller");
    
    await professionalService.createProfessionalService(professionalData);   
    return res.sendStatus(200);
  } catch (error) {
    if (error.name === "ProfessionalAlreadyExist") {
      return res.status(error.code).send(error.message);
    
    }
    return res.sendStatus(400);
  }
};

const professionalController = {
  postProfessional,
}

export default professionalController;