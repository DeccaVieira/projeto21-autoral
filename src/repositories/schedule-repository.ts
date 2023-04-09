import prisma from "../config/database";

async function getScheduleByProfessionalId(professional_id) {
  return prisma.schedule.findMany({
    where: {
      patient_id : 0,
      professional_id: professional_id
    }
  })
}
const scheduleRepository = {
  getScheduleByProfessionalId,
};
export default scheduleRepository;
