import schedulingRepository from "../../repositories/scheduling-repository";
import professionalErrors from "../professional-service/error";
import { Scheduling } from "../../protocols/scheduling-protocols";
import scheduleRepository from "repositories/schedule-repository";
import { exclude } from "../../utils/prisma.utils";
import { useResolvedPath } from "react-router-dom";
async function PostSchedulingService(scheduling) {
  console.log(scheduling, "service");

  try {
    await schedulingRepository.createScheduling(scheduling as Scheduling);
  } catch (error) {
    console.log(error);
  }
}
async function GetPatientScheduleService( id) {
  
  
  try {
    const scheduling = await schedulingRepository.patientScheduling(id)
   
    return scheduling
  } catch (error) {
    console.log(error);
  }
}

async function GetProfessionalScheduleService(date_schedule, id) {
  try {
    const professionalName = await schedulingRepository.professionalById(+id)
    console.log(professionalName, "rrrr");
    
    const professionalHealth = await schedulingRepository.professionalByName(professionalName.name)
   console.log(professionalHealth, "proff");
   
    const scheduling = await schedulingRepository.professionalScheduling(date_schedule, professionalHealth.id);
   

//const teste = {...scheduling}
   
   return scheduling
  } catch (error) {
    console.log(error);
  }
}

const schedulingService = {
  PostSchedulingService,
  GetPatientScheduleService,
  GetProfessionalScheduleService,
};
export default schedulingService;
