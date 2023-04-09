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

async function getScheduleByDayId(data_schedule_id){
  try{
const availableHour = await scheduleRepository.getHourByDayId(data_schedule_id);
console.log(availableHour, "service");

return availableHour;
  }catch (error){
    console.log(error);
    
  }
}


const scheduleService = {
  getScheduleByProfId, getScheduleByDayId
}
export default scheduleService