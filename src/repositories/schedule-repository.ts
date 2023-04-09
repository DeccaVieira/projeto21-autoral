import prisma from "../config/database";

async function getScheduleByProfessionalId(professional_id) {
  return prisma.schedule.findMany({
    where: {
      professional_id: professional_id
    }
  })
}

async function getHourByDayId(data_schedule_id) {
  return prisma.schedule_hour.findMany({
    where: {date_schadule_id: data_schedule_id}
  })
}
const scheduleRepository = {
  getScheduleByProfessionalId,getHourByDayId
};
export default scheduleRepository;
