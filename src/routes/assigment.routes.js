import { Router } from "express";
import { authGuard } from "../middlewares/index.js";
import {
  createAssigmentCon,
  getAllAssigmentsCon,
  getAssigmentByIdCon,
  updateAssigmentByIdCon,
} from "../controllers/index.js";

export const assigmentRouter = Router();

assigmentRouter.get("/", authGuard, getAllAssigmentsCon);
assigmentRouter.get("/:id", authGuard, getAssigmentByIdCon);
assigmentRouter.post("/", authGuard, createAssigmentCon);
assigmentRouter.put("/:id", authGuard, updateAssigmentByIdCon);
assigmentRouter.delete("/:id", authGuard, updateAssigmentByIdCon);
