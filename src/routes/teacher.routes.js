import { Router } from "express";
import { authGuard, teacherMiddleware } from "../middlewares/index.js";
import {
  createTeacherValidationSchema,
  updateTeacherValidationSchema,
} from "../validation/index.js";
import {
  createTeacherCon,
  deleteTeacherByIdCon,
  getAllTeachersCon,
  getTeacherByIdCon,
  updateTeacherByIdCon,
} from "../controllers/index.js";

export const teacherRouter = Router();

teacherRouter.get("/", authGuard, getAllTeachersCon);
teacherRouter.get("/:id", authGuard, getTeacherByIdCon);
teacherRouter.post(
  "/",
  authGuard,
  teacherMiddleware(createTeacherValidationSchema),
  createTeacherCon
);
teacherRouter.put(
  "/:id",
  authGuard,
  teacherMiddleware(updateTeacherValidationSchema),
  updateTeacherByIdCon
);
teacherRouter.delete("/:id", authGuard, deleteTeacherByIdCon);
