import Joi from "../../node_modules/joi/lib/index.js";

const professionalSchema = Joi.object ({
  name: Joi.string().min(2).max(50),
  email: Joi.string().email().min(3).max(50),
  cpf: Joi.string(),
  ufRegistration:  Joi.string(),
  registrationType:  Joi.string(),
  professionalNumber: Joi.string(),
  phoneNumber: Joi.string()
});

export default professionalSchema;
