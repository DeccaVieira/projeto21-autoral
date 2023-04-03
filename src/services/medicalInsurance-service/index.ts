import medicalInsuranceErrors from "./error";
import medicalInsuranceRepository from "../../repositories/medicalInsurance-repository";

async function getMedicalInsuranceService(){
  try {
    
const medicalInsurance = await medicalInsuranceRepository.getMedicalInsurance();


return medicalInsurance;
  }catch (err){
    console.log(err);
    
  }
}

async function getPlanMedicalInsuranceService(medical_insurance_id:number){
  console.log(medical_insurance_id,"idd serv");
  
  try {
    
const planMedicalInsurance = await medicalInsuranceRepository.getPlanMedicalInsurance(medical_insurance_id)


return planMedicalInsurance;
  }catch (err){
    console.log(err);
    
  }
}

const medicalInsuranceService = {
  getMedicalInsuranceService, getPlanMedicalInsuranceService
}

export default medicalInsuranceService