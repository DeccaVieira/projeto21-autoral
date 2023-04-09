import { Request, Response } from "express";
import scheduleService from "../services/schedule-service"
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";

async function GetAvailableSchedules(req: AuthenticatedRequest, res: Response) {
    const {professional_id} = req.params;
  try {
    const schedule = await scheduleService.getScheduleByProfId(+professional_id);
    console.log(schedule, "controller");
    
    return res.status(200).send(schedule);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function GetAvailableHours(req: AuthenticatedRequest, res: Response) {
  const {data_schedule_id} = req.params;
try {
  const hour = await scheduleService.getScheduleByDayId(+data_schedule_id);
  console.log(hour, "controller");
  
  return res.status(200).send(hour);
} catch (error) {
  return res.status(400).send(error);
}
}

const scheduleController = {
  GetAvailableSchedules, GetAvailableHours
};
export default scheduleController;
