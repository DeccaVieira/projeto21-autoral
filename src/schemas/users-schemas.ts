import Joi from "../../node_modules/joi/lib/index.js";
import { Users } from "../protocols/signUp-protocols.js";

const signUpSchema = Joi.object <Users>({
  cpf: Joi.string().required(),
  name: Joi.string().required().min(2).max(50),
  email: Joi.string().email().required().min(3).max(50),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.ref("password"),
  phoneNumber: Joi.string().required()
});

export default signUpSchema;
