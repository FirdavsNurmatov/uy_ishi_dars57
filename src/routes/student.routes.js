import { Router } from "express";
import { authGuard, studentMiddleware } from "../middlewares/index.js";
import {
  createStudentValidationSchema,
  updateStudentValidationSchema,
} from "../validation/index.js";
import {
  createStudentCon,
  deleteStudentByIdCon,
  getAllStudentsCon,
  getStudentByIdCon,
  updateStudentByIdCon,
} from "../controllers/index.js";

export const studentRouter = Router();

studentRouter.get("/", authGuard, getAllStudentsCon);
studentRouter.get("/:id", authGuard, getStudentByIdCon);
studentRouter.post(
  "/",
  authGuard,
  studentMiddleware(createStudentValidationSchema),
  createStudentCon
);
studentRouter.put(
  "/:id",
  authGuard,
  studentMiddleware(updateStudentValidationSchema),
  updateStudentByIdCon
);
studentRouter.delete("/:id", authGuard, deleteStudentByIdCon);
