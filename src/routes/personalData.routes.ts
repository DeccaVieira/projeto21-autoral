import { Router } from "express";
import { validationSchema } from "../middlewares/schemaValidation"
import personalDataSchema from "../schemas/personalData-schemas";
import personalDataController from "../controllers/personal-data-controller";
import tokenAuthentication from "../middlewares/authentication-middleware"

const personalRouter = Router();

personalRouter.get("/personal-data-insurance" , tokenAuthentication, personalDataController.getPersonalDataInsurance);
personalRouter.get("/personal-data" , tokenAuthentication, personalDataController.getPersonalData);
personalRouter.post("/personal-data" , tokenAuthentication,validationSchema(personalDataSchema, 422), personalDataController.postPersonalData);
export default personalRouter;