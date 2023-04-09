import { Prof } from "../../protocols/professional-protocol"
import professionalErrors from "./error"
import professionalRepository from "../../repositories/professional-repository";

async function createProfessionalService(professionalData){
  try {
  await professionalRepository.createProfessionalData(professionalData);
  console.log(professionalData, "service");
return
  }catch (err){
    console.log(err);
    
  }
}

export async function getProfessionalByCbo(cbo_id) {
  console.log(cbo_id, "service cbo");
  try {
    const professionalByCbo =
      await professionalRepository.getHealthProfessional(cbo_id);
    return professionalByCbo;
  } catch (error) {
    return error;
  }
}



const professionalService = {
  createProfessionalService, getProfessionalByCbo
}

export default professionalService