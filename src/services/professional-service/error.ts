import { ModelError } from "../../protocols/error-protocol"

function professionalAlreadyExists(): ModelError {
  return {
    code: 409,
    name: "ProfessionalAlreadyExists",
    message: "Professional ALready exists in our database",
  };
}

const professionalErrors = {
  professionalAlreadyExists
};

export default professionalErrors;