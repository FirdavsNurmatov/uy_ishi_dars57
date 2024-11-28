import { Router } from "express";
import { authGuard } from "../middlewares/index.js";
import {
  createHomeworkCon,
  deleteHomeworkByIdCon,
  getAllHomeworksCon,
  getHomeworkByIdCon,
  updateHomeworkByIdCon,
} from "../controllers/index.js";

export const homeworkRouter = Router();

homeworkRouter.get("/", authGuard, getAllHomeworksCon);
homeworkRouter.get("/:id", authGuard, getHomeworkByIdCon);
homeworkRouter.post("/", authGuard, createHomeworkCon);
homeworkRouter.put("/:id", authGuard, updateHomeworkByIdCon);
homeworkRouter.delete("/:id", authGuard, deleteHomeworkByIdCon);
