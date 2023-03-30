import { Router } from "express";
import { validationSchema } from "../middlewares/schemaValidation"
import professionalSchema from "../schemas/professional-schema"
import professionalController from "../controllers/professional-controller"
import tokenAuthentication from "../middlewares/authentication-middleware"

const professionalRouter = Router();

professionalRouter.post("/professional-registration" ,validationSchema(professionalSchema, 422), professionalController.postProfessional);

export default professionalRouter;