import { Router } from "express";
import { validationSchema } from "../middlewares/schemaValidation"
import tokenAuthentication from "../middlewares/authentication-middleware"
import scheduleController from "../controllers/schedule-controller";

const scheduleRouter = Router();

scheduleRouter.get("/schedule/:professional_id" , tokenAuthentication, scheduleController.GetAvailableSchedules)
scheduleRouter.get("/date/:date_schedule/:professional_id" , tokenAuthentication, scheduleController.verifyScheduleByDay)
scheduleRouter.post("/schedule", tokenAuthentication,scheduleController.PostSchedule)
export default scheduleRouter;