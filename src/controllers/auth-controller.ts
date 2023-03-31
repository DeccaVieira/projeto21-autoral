import { Request, Response } from "express";
import signInService from "../services/sign-in-service/signIn-service";

async function signInController(req: Request, res: Response) {
  const { email, password } = res.locals.signin;

  try {
    const set = await signInService.userLogin(email, password);
console.log(set,"cont");

    return res.status(200).send(set);
  } catch (error) {
    if (error.name === "emailAndPasswordRequired") {
      return res.status(error.code).send(error.message);
    }
    if (error.name === "userDoesNotExist") {
      return res.status(error.code).send(error.message);
    }
    if (error.name === "wrongEmailOrPassword") {
      return res.status(error.code).send(error.message);
    }
  }
}
const signInCont = {
  signInController,
};

export default signInCont;
