import prisma from "../config/database";
import {Prof} from "../protocols/professional-protocol";

export async function createProfessionalData({name, email,
  cpf, ufRegistration,
    registrationType,
    professionalNumber,
    phoneNumber}) {
  return prisma.candidate_health_professional.create({
    data: {
      name, email, cpf, uf_registration: ufRegistration, registration_type: registrationType, professional_number: professionalNumber,
      phone_number:phoneNumber
    }
  });
}

export async function getHealthProfessional(cbo_id:number){
  console.log(typeof cbo_id, cbo_id, "repository cbo");
  return prisma.health_professional.findMany({
    where : {cbo_id: cbo_id}
  })
}


const professionalRepository = {
  createProfessionalData, getHealthProfessional
};

export default professionalRepository;
