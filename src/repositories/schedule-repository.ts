import prisma from "../config/database";

async function getScheduleByProfessionalId(professional_id) {
  return prisma.schedule.findMany({
    where: {
      professional_id: professional_id,
    },
  });
}
async function getScheduleDate(scheduleDate, professionalId) {
  console.log(scheduleDate, professionalId, "rep");
  
  try{

    return prisma.schedule.findMany({
      where: {
        date_schedule: scheduleDate,
        professional_id: professionalId
      },
    });
  }catch(err){
    console.log(err);
    
  }
  }
async function getUser(id) {
  return prisma.users.findFirst({
    where: { id: id },
  });
}

async function getProfessional(professional) {
  return prisma.health_professional.findFirst({
    where: { name: professional.name },
  });
}
async function postSchedule(schedulePost, idProfessional) {
  return prisma.schedule.create({
    data: {
      professional_id: idProfessional,
      date_schedule: schedulePost.date_schedule,
      shift_schedule: schedulePost.shift_schedule,
    },
  });
}
async function isDuplicity(schedulePost, idProfessional) {
  console.log(schedulePost.date_schedule, "sdgjkjhgf");

  return prisma.schedule.findFirst({
    where: {
      date_schedule: schedulePost.date_schedule,
      shift_schedule: schedulePost.shift_schedule,
      professional_id: idProfessional,
    },
  });
}

const scheduleRepository = {
  getScheduleByProfessionalId,
  getUser,
  getProfessional,
  postSchedule,
  isDuplicity,
  getScheduleDate,
};
export default scheduleRepository;
