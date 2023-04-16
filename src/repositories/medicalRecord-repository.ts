import prisma from "../config/database";

async function PostMedicalRecordRepository(medicalRecord){
 console.log(medicalRecord);
 
  return prisma.medical_record.create({
    data:{
      professional_id: medicalRecord.professional_id,
      patient_id: medicalRecord.patient_id,
      cbo_id: medicalRecord.cbo_id,
      description: medicalRecord.description
    }
  })
}

const medicalRecordRepository = {
  PostMedicalRecordRepository, 

}

export default medicalRecordRepository;