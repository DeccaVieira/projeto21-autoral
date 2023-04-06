import { Personal } from "../../protocols/personal-data-protocol"
import personalErrors from "./error"
import personalDataRepository from "../../repositories/personal-repository";

async function createPersonalService(personalData){
  try {
    console.log(personalData, "ser");
await personalDataRepository.upsert(personalData)

return
  }catch (err){
    console.log(err);
    
  }
}

async function getPersonalService(id){
  try {
    
const dataByUserId = await personalDataRepository.getPersonalData(id)


if(!dataByUserId){
  throw personalErrors.dataDoesnotExist();
}

return dataByUserId;
  }catch (err){
    console.log(err);
    
  }
}


const personalService = {
 getPersonalService, createPersonalService
}

export default personalService