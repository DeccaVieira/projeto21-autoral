import joi from "joi";

const personalDataSchema = joi.object({
  medicalInsuranceId: joi.number().required(),
  medicalInsuranceNumber: joi.number().required()
});

export default personalDataSchema;