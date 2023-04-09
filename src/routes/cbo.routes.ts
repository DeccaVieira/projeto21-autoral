import { Router } from "express";
import cboController from "../controllers/cbo-controller";
const cboRouter = Router();

cboRouter.get("/cbo", cboController.getCbo);

export default cboRouter;