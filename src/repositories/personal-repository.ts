import prisma from "../config/database";
import { Personal } from "../protocols/personal-data-protocol";

async function createPersonalData(
 personalData
) {
  console.log(personalData,"rep");
  
  return prisma.personal_data.create({
    data: {
      user_id: personalData.user_id,
      medical_insurance: personalData.medical_insurance,
      medical_insurance_plan: personalData.medical_insurance_plan,
      medical_number: personalData.medical_number,
    },
  });
}

async function getPersonalData(id) {
  return prisma.personal_data.findFirst({
    where: { user_id: id },
  });
}

const personalDataRepository = {
  getPersonalData, createPersonalData
};

export default personalDataRepository;
