import { ModelError } from "../../protocols/error-protocol"

function dataRequired(): ModelError {
  return {
    code: 422,
    name: "DataRequired",
    message: "All data is required",
  };
}
function dataDoesnotExist(): ModelError {
  return {
    code: 404,
    name: "dataDoesnotExist",
    message: "Data does not exist",
  };
}
const medicalInsuranceErrors = {
  dataRequired, dataDoesnotExist
};

export default medicalInsuranceErrors;