import { Request, Response } from "express";
import scheduleService from "../services/schedule-service/index";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";

async function GetAvailableSchedules(req: AuthenticatedRequest, res: Response) {
  const { professional_id } = req.params;
  try {
    const schedule = await scheduleService.getScheduleByProfId(
      +professional_id
    );
    console.log(schedule, "controller");

    return res.status(200).send(schedule);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function PostSchedule(req: AuthenticatedRequest, res: Response) {
  const schedulePost = req.body;
  const { id } = res.locals.signin;
  console.log(req.body, "body");

  try {
    const postSch = await scheduleService.PostScheduleService(
      schedulePost,
      +id
    );
    console.log(postSch, "controller");

    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

const scheduleController = {
  GetAvailableSchedules,
  PostSchedule,
};
export default scheduleController;
