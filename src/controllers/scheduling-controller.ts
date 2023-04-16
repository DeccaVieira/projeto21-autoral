import { Request, Response } from "express";
import schedulingService from "../services/scheduling-service";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { Scheduling } from "../protocols/scheduling-protocols";

async function PostScheduling(req: AuthenticatedRequest, res: Response) {
  const schedulingPost = req.body;
  const { id } = res.locals.signin;
  const scheduling: Scheduling = {
    professional_id: schedulingPost.health_professional_id,
    patient_id: +id,
    hour: schedulingPost.schedule_hour,
    schedule_date: schedulingPost.date_schedule,
    share_data: +schedulingPost.share_data,
    cbo: schedulingPost.cbo,
    quantity: +schedulingPost.quantityProcedure,
  };
  console.log(req.body, "body");

  try {
    const postScheduling = await schedulingService.PostSchedulingService(
      scheduling
    );
    console.log(postScheduling, "controller");

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
}
async function getScheduleByProfessionalId(
  req: AuthenticatedRequest,
  res: Response
) {
  const { id } = res.locals.signin;
  const { date_schedule } = req.params;
  console.log(id, "idp");
  
  try {
    const patientsScheduled =
      await schedulingService.GetProfessionalScheduleService(
        req.params.schedule_date,
        +id
      );
      console.log(patientsScheduled,"sss");
      
    return res.status(200).send(patientsScheduled);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

async function updateSchedulingController(req: AuthenticatedRequest, res: Response) {
  const { id } = res.locals.signin;
  const {quantity} = req.body;
  const {scheduling_id} = req.params;
  try {
    await schedulingService.updateScheduling(+scheduling_id, quantity, id)
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    
  }
};

async function getScheduleByPatientId(
  req: AuthenticatedRequest,
  res: Response
) {
  const { id } = res.locals.signin;
 

  try {
    const patientsScheduled = await schedulingService.GetPatientScheduleService(
   
      +id
    );
    return res.status(200).send(patientsScheduled);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
const schedulingController = {
  PostScheduling,
  getScheduleByProfessionalId,
  getScheduleByPatientId,
  updateSchedulingController
};

export default schedulingController;
