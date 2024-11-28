import { logger } from "../utils/index.js";
import {
  createLessonService,
  deleteLessonByIdService,
  getAllLessonsService,
  getLessonByIdService,
  updateLessonByIdService,
} from "../services/index.js";

export const getAllLessonsCon = async (req, res, next) => {
  try {
    const allData = await getAllLessonsService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getLessonByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getLessonByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createLessonCon = async (req, res, next) => {
  try {
    const { course_id, description, title } = req.body;

    const data = await createLessonService({
      course_id: course_id,
      description: description,
      title: title,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateLessonByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { course_id, description, title } = req.body;

    const data = await updateLessonByIdService(id, {
      course_id: course_id,
      description: description,
      title: title,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteLessonByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteLessonByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
