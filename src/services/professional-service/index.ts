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



const professionalService = {
  createProfessionalService
}

export default professionalService