import { ModelError } from "../../protocols/error-protocol"

function professionalDoesnotExist(): ModelError {
  return {
    code: 409,
    name: "professionalDoesnotExist",
    message: "Professional doesn't exist in our database",
  };
}
const professionalErrors = {
  professionalDoesnotExist
}

export default professionalErrors;