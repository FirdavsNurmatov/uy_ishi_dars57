import { logger } from "../utils/index.js";
import {
  createHomeworkService,
  deleteHomeworkByIdService,
  getAllHomeworksService,
  getHomeworkByIdService,
  updateHomeworkByIdService,
} from "../services/index.js";

export const getAllHomeworksCon = async (req, res, next) => {
  try {
    const allData = await getAllHomeworksService();

    res.send(allData);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const getHomeworkByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await getHomeworkByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const createHomeworkCon = async (req, res, next) => {
  try {
    const { lesson_id, student_id, description, title } = req.body;

    const data = await createHomeworkService({
      lesson_id: lesson_id,
      student_id: student_id,
      description: description,
      title: title,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const updateHomeworkByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const { lesson_id, student_id, description, title } = req.body;

    const data = await updateHomeworkByIdService(id, {
      lesson_id: lesson_id,
      student_id: student_id,
      description: description,
      title: title,
    });

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};

export const deleteHomeworkByIdCon = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await deleteHomeworkByIdService(id);

    res.status(data.status).send(data.msg);
  } catch (error) {
    logger.error(error);
    res.status(400).send(error.message);
  }
};
