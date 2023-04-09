import { Router } from "express";
import { validationSchema } from "../middlewares/schemaValidation"
import tokenAuthentication from "../middlewares/authentication-middleware"
import scheduleController from "../controllers/schedule-controller";

const scheduleRouter = Router();

scheduleRouter.get("/schedule/:professional_id" , tokenAuthentication, scheduleController.GetAvailableSchedules)
scheduleRouter.get("/schedule_hour/:data_schedule_id" , tokenAuthentication, scheduleController.GetAvailableHours)

export default scheduleRouter;