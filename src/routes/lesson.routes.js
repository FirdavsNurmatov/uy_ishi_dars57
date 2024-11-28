import { Router } from "express";
import { authGuard } from "../middlewares/index.js";
import {
  createLessonCon,
  deleteLessonByIdCon,
  getAllLessonsCon,
  getLessonByIdCon,
  updateLessonByIdCon,
} from "../controllers/index.js";

export const lessonRouter = Router();

lessonRouter.get("/", authGuard, getAllLessonsCon);
lessonRouter.get("/:id", authGuard, getLessonByIdCon);
lessonRouter.post("/", authGuard, createLessonCon);
lessonRouter.put("/:id", authGuard, updateLessonByIdCon);
lessonRouter.delete("/:id", authGuard, deleteLessonByIdCon);
