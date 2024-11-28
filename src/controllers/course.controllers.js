import { logger } from "../utils/index.js";
import {
  createCourseService,
  deleteCourseByIdService,
  getAllCoursesService,
  getCourseByIdService,
  updateCourseByIdService,
} from "../services/index.js";

export const getAllCoursesCon = async (req, res, next) => {
  try {
    const allData = await getAllCoursesService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getCourseByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getCourseByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createCourseCon = async (req, res, next) => {
  try {
    const { name, description, start_time, end_time } = req.body;

    const data = await createCourseService({
      name: name,
      description: description,
      start_time: start_time,
      end_time: end_time,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateCourseByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { name, description, start_time, end_time } = req.body;

    const data = await updateCourseByIdService(id, {
      name: name,
      description: description,
      start_time: start_time,
      end_time: end_time,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteCourseByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteCourseByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
