import { Router } from "express";
import { validationSchema } from "../middlewares/schemaValidation"
import tokenAuthentication from "../middlewares/authentication-middleware"
import scheduleController from "../controllers/schedule-controller";

const scheduleRouter = Router();

scheduleRouter.get("/schedule/:professional_id" , tokenAuthentication, scheduleController.GetAvailableSchedules)

export default scheduleRouter;