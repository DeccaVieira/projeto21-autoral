import prisma from "../config/database";

async function getMedicalInsurance(){
  return prisma.medical_insurance.findMany();
  }

  async function getPlanMedicalInsurance({medical_insurance_id}){
    return prisma.medical_insurance_plan.findMany(
      {
        where: medical_insurance_id
      }
    );
    }

const medicalInsuranceRepository = {
getMedicalInsurance, getPlanMedicalInsurance
}
export default medicalInsuranceRepository