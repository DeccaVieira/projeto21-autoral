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

async function getPersonalDataName(id){
  try {
    
const dataByUserId = await personalDataRepository.getPersonalData(+id)
console.log(dataByUserId, "personalData");

const nameInsurance = await personalDataRepository.getNameInsurance(dataByUserId.medical_insurance);
console.log(nameInsurance, "name Insurance");

const namePlan = await personalDataRepository.getNamePlan(dataByUserId.medical_insurance_plan);
console.log(namePlan);

const result = {

}
if(!dataByUserId){
  throw personalErrors.dataDoesnotExist();
}

return {...result,  medical_insurance: nameInsurance.name,
  medical_insurance_plan: namePlan.name,
  medical_number: dataByUserId.medical_number};
  }catch (err){
    console.log(err);
    
  }
} 

async function getPersonalService(id){
  try {
    
const dataByUserId = await personalDataRepository.getPersonalData(+id)
console.log(dataByUserId, "personalData");


if(!dataByUserId){
  throw personalErrors.dataDoesnotExist();
}

return dataByUserId;
  }catch (err){
    console.log(err);
    
  }
}


const personalService = {
 getPersonalService, createPersonalService, getPersonalDataName
}

export default personalService