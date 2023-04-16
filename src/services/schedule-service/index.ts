import schedulingRepository from "../../repositories/scheduling-repository";
import scheduleRepository from "../../repositories/schedule-repository";
import professionalErrors from "./errors";
import { HotModuleReplacementPlugin } from "webpack";
import dayjs = require("dayjs");
async function getScheduleByProfId(professional_id) {
  const today = dayjs().format()
  let array = []
  try {
    const availableSchedule =
      await scheduleRepository.getScheduleByProfessionalId(professional_id);
{availableSchedule.map((s)=> {

  if(s.date_schedule > today){    
  return array.push(s)
  }
})}
console.log(array, "array");

    return array;
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
      schedulePost,
      idProfessional.id
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
async function getScheduleByDayId(scheduleDate, professionalId) {
  console.log(scheduleDate, "hour sch");
  const morning = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
  ];
  const afternoon = [
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];
  const fullTime = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];
  try {
    const dateSchedule = await scheduleRepository.getScheduleDate(scheduleDate, professionalId);
    console.log(dateSchedule, "dateSchedule service");
    let result;
    let arr = [];
   
    
    if (
      (dateSchedule[0]?.shift_schedule === 1 &&
        dateSchedule[1]?.shift_schedule === 2) ||
      (dateSchedule[0]?.shift_schedule === 2 &&
        dateSchedule[1]?.shift_schedule === 1)
    ) {
     
      
      result = [...fullTime];
    } else if (dateSchedule[0]?.shift_schedule === 1) {
      result = [...morning];
     
    } else {
      result = [...afternoon];
      
    }
    for (let i = 0; i < result.length ; i++) {
      let hour = result[i];
      const AvailableHour = await schedulingRepository.filterScheduling(
        hour,
        professionalId
      );

      arr = arr.concat(AvailableHour);
    }
    console.log(arr, "arr");

    let array = [...result];

    for (let i = 0; i < arr.length; i++) {
      const hour = arr[i].hour;

      if (array.includes(hour)) {
        array = array.filter((item) => item !== hour);
      }
    }

let newResult = []
for(let i=0; i<result.length; i++){
  if(array.includes(result[i])){
    newResult.push({hour:result[i] , available: true})
  }else{
    newResult.push({hour:result[i] , available: false})
  }
}

    console.log(newResult, "new array");
    return newResult;
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
