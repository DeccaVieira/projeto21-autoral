import prisma from "../config/database";

async function getMedicalInsurance() {
  return prisma.medical_insurance.findMany();
}

async function getPlanMedicalInsurance(id: number) {
  console.log(id, "idd rep");

  return prisma.medical_insurance_plan.findMany({
    where: {medical_insurance_id: id},
  });
}

const medicalInsuranceRepository = {
  getMedicalInsurance,
  getPlanMedicalInsurance,
};
export default medicalInsuranceRepository;
