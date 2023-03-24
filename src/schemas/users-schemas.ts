import Joi from "../../node_modules/joi/lib/index.js";
import { Users } from "../protocols/signUp-protocols.js";

const signUpSchema = Joi.object ({
  cpf: Joi.string(),
  name: Joi.string().min(2).max(50),
  email: Joi.string().email().min(3).max(50),
  password: Joi.string().min(6),
  confirmPassword: Joi.ref("password"),
  phoneNumber: Joi.string()
});

export default signUpSchema;
