import schedulingController from "../controllers/scheduling-controller";
import { Router } from "express";
import tokenAuthentication from "../middlewares/authentication-middleware"
import { validationSchema } from "../middlewares/schemaValidation";

const schedulingRouter = Router();

schedulingRouter.post("/scheduling", tokenAuthentication, schedulingController.PostScheduling);
schedulingRouter.get("/scheduling-professional/:schedule_date", tokenAuthentication, schedulingController.getScheduleByProfessionalId);
schedulingRouter.get("/scheduling-patient", tokenAuthentication, schedulingController.getScheduleByPatientId);

export default schedulingRouter;