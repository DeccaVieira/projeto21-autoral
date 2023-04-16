import medicalRecordRepository from "../../repositories/medicalRecord-repository";

async function postMedicalRecord(medicalRecord){
  console.log(medicalRecord, "service");
  
  try {
    const record = await medicalRecordRepository.PostMedicalRecordRepository(medicalRecord);
    console.log(record);
    
  } catch (error) {
    console.log(error);
    
  }
}

const medicalRecordService = {
  postMedicalRecord,

};
export default medicalRecordService;