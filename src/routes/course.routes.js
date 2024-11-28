import { Router } from "express";
import { authGuard } from "../middlewares/index.js";
import {
  createCourseCon,
  deleteCourseByIdCon,
  getAllCoursesCon,
  getCourseByIdCon,
  updateCourseByIdCon,
} from "../controllers/index.js";

export const courseRouter = Router();

courseRouter.get("/", authGuard, getAllCoursesCon);
courseRouter.get("/:id", authGuard, getCourseByIdCon);
courseRouter.post("/", authGuard, createCourseCon);
courseRouter.put("/:id", authGuard, updateCourseByIdCon);
courseRouter.delete("/:id", authGuard, deleteCourseByIdCon);
