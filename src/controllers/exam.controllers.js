import { logger } from "../utils/index.js";
import {
  createExamService,
  deleteExamByIdService,
  getAllExamsService,
  getExamByIdService,
  updateExamByIdService,
} from "../services/exam.service.js";

export const getAllExamsCon = async (req, res, next) => {
  try {
    const allData = await getAllExamsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getExamByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getExamByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createExamCon = async (req, res, next) => {
  try {
    const { course_id, student_id, title, date } = req.body;

    const data = await createExamService({
      course_id: course_id,
      student_id: student_id,
      title: title,
      date: date,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateExamByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { course_id, student_id, title, date } = req.body;

    const data = await updateExamByIdService(id, {
      course_id: course_id,
      student_id: student_id,
      title: title,
      date: date,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteExamByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteExamByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
