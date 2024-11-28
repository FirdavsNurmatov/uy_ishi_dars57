import { logger } from "../utils/index.js";
import {
  createAssigmentService,
  deleteAssigmentByIdService,
  getAllAssigmentsService,
  getAssigmentByIdService,
  updateAssigmentByIdService,
} from "../services/index.js";

export const getAllAssigmentsCon = async (req, res, next) => {
  try {
    const allData = await getAllAssigmentsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getAssigmentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getAssigmentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createAssigmentCon = async (req, res, next) => {
  try {
    const { course_id, student_id, teacher_id } = req.body;

    const data = await createAssigmentService({
      course_id: course_id,
      student_id: student_id,
      teacher_id: teacher_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateAssigmentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { course_id, student_id, teacher_id } = req.body;

    const data = await updateAssigmentByIdService(id, {
      course_id: course_id,
      student_id: student_id,
      teacher_id: teacher_id,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteAssigmentByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteAssigmentByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
