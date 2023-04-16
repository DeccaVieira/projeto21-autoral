import { Request, Response } from "express";
import scheduleService from "../services/schedule-service/index";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";

async function GetAvailableSchedules(req: AuthenticatedRequest, res: Response) {
  const { professional_id } = req.params;
  try {
    const schedule = await scheduleService.getScheduleByProfId(
      +professional_id
    );


    return res.status(200).send(schedule);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function verifyScheduleByDay(req: AuthenticatedRequest, res: Response){
  const { date_schedule, professional_id } = req.params;
  
  
  try {
    const schedule = await scheduleService.getScheduleByDayId(
      date_schedule, +professional_id
    );
 console.log(schedule, "response back");
 
    return res.status(200).send(schedule);
  } catch (error) {
    return res.status(400).send(error);
  }
}
async function PostSchedule(req: AuthenticatedRequest, res: Response) {
  const schedulePost = req.body;
  const { id } = res.locals.signin;


  try {
    const postSch = await scheduleService.PostScheduleService(
      schedulePost,
      +id
    );
  

    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

const scheduleController = {
  GetAvailableSchedules,
  PostSchedule,verifyScheduleByDay
};
export default scheduleController;
