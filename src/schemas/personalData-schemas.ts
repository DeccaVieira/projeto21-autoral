import joi from "joi";

const personalDataSchema = joi.object({
  medicalInsurance: joi.number().required(),
  medicalInsurancePlan: joi.number().required(),
  medicalNumber: joi.number().required(),
});

export default personalDataSchema;

