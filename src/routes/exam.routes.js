import { Router } from "express";
import { authGuard } from "../middlewares/index.js";
import {
  createExamCon,
  deleteExamByIdCon,
  getAllExamsCon,
  getExamByIdCon,
  updateExamByIdCon,
} from "../controllers/index.js";

export const examRouter = Router();

examRouter.get("/", authGuard, getAllExamsCon);
examRouter.get("/:id", authGuard, getExamByIdCon);
examRouter.post("/", authGuard, createExamCon);
examRouter.put("/:id", authGuard, updateExamByIdCon);
examRouter.delete("/:id", authGuard, deleteExamByIdCon);
