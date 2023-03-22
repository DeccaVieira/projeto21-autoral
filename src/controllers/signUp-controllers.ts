import { Request, Response } from "express";
import bcrypt from "bcrypt";
import signUpService from "../services/sign-up-service/signUp-service";

async function signUp(req: Request, res: Response) {
  const {cpf, name, email, password, phoneNumber  } = res.locals.user;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await signUpService.createUser(cpf, name, email, hashPassword, phoneNumber );
   
    
    res.sendStatus(201);
  } catch (error) {
    if (error.name === "EmailAlreadyExists") {
      return res.status(error.code).send(error.message);
    }
    if (error.name === "emailAndPasswordRequired") {
      return res.status(error.code).send(error.message);
    }
  }
}

const signUpController = {
  signUp,
};

export default signUpController;
