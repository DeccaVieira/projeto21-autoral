import scheduleRepository from "../../repositories/schedule-repository";
import professionalErrors from "./errors";

async function getScheduleByProfId(professional_id) {
  try {
    const availableSchedule = await scheduleRepository.getScheduleByProfessionalId(professional_id);

    return availableSchedule;
  } catch (error) {
    console.log(error);
  }
}
async function PostScheduleService(schedulePost, id) {
  console.log(schedulePost, "id");

  try {
    const professionalExists = await scheduleRepository.getUser(id);

    if (!professionalExists) {
      throw professionalErrors.professionalDoesnotExist();
    }
    const idProfessional = await scheduleRepository.getProfessional(
      professionalExists
    );

    if (!idProfessional) {
      throw professionalErrors.professionalDoesnotExist();
    }
    const duplicity = await scheduleRepository.isDuplicity(
      schedulePost, idProfessional.id
    );
    
    if (duplicity) {
      throw professionalErrors.professionalDoesnotExist();
    }


    const postScheduleService = await scheduleRepository.postSchedule(
      schedulePost,
      idProfessional.id
    );

    return postScheduleService;
  } catch (error) {
    console.log(error);
  }
}
async function getScheduleByDayId() {
  const morning = ["07:00","07:30", "08:00", "08:30","09:00","09:30", "10:00", "10:30", "11:00", "11:30", "12:00"]
  const afternoon = ["13:00","13:30", "14:00", "14:30","15:00","15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
  
  try {
  
  } catch (error) {
    console.log(error);
  }
}

const scheduleService = {
  getScheduleByProfId,
  getScheduleByDayId,
  PostScheduleService,
};
export default scheduleService;
