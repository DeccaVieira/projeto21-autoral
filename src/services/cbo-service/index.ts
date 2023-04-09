import cboRepository from "../../repositories/cbo-repository";

async function getMedicalInsuranceService() {
  try {
    const cboService = await cboRepository.getCboRepository();

    return cboService;
  } catch (err) {
    console.log(err);
  }
}

const cboService = {
  getMedicalInsuranceService
}
export default cboService;