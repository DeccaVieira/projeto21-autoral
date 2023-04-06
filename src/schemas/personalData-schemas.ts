import joi from "joi";

const personalDataSchema = joi.object({
  id: joi.number(),
  medicalInsurance: joi.number().required(),
  medicalInsurancePlan: joi.number().required(),
  medicalNumber: joi.string().required(),
});

export default personalDataSchema;

