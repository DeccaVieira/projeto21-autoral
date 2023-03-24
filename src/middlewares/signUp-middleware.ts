import signUpSchema from "../schemas/users-schemas";
import { NextFunction, Request, Response } from "express";

async function validateSignUp(req: Request, res: Response, next: NextFunction) {
  const { cpf, name, email, password, confirmPassword, phoneNumber } = req.body;

  if (password !== confirmPassword || !confirmPassword) {
    return res.sendStatus(422);
  }
  const { error } = signUpSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send({ errors });
  }
  try {
  } catch (err) {
    return res.status(422).send(err.message);
  }
  res.locals.user = { cpf, name, email, password, phoneNumber};
  next();
}

const middlewareSignUp = {
  validateSignUp,
};

export default middlewareSignUp;
