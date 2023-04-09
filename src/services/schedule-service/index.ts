import scheduleRepository from "../../repositories/schedule-repository"

async function getScheduleByProfId(professional_id){
  try{
const availableSchedule = await scheduleRepository.getScheduleByProfessionalId(professional_id);
console.log(availableSchedule, "service");

return availableSchedule;
  }catch (error){
    console.log(error);
    
  }
}

const scheduleService = {
  getScheduleByProfId
}
export default scheduleService