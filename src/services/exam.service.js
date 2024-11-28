import db from "../database/index.js";

export const getAllExamsService = async () => {
  try {
    const allData = await db.select("*").from("exam");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getExamByIdService = async (id) => {
  try {
    const data = await db.select("*").from("exam").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Exam not found!" };
  } catch (error) {
    return error;
  }
};

export const createExamService = async (examData) => {
  try {
    const id = examData?.id;
    const oldData = await db.select("*").from("exam").where({ id }).first();

    if (oldData.length >= 1) {
      return { status: 401, msg: "Exam already exists!" };
    }

    await db.table("exam").insert(examData);

    return { status: 200, msg: "Exam created!" };
  } catch (error) {
    return error;
  }
};

export const updateExamByIdService = async (id, examData) => {
  try {
    const data = await db.select("*").from("exam").where({ id }).first();

    if (data.length >= 1) {
      await db.table("exam").where({ id }).update(examData);
      return { status: 200, msg: "Exam updated!" };
    }

    return { status: 404, msg: "Exam not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteExamByIdService = async (id) => {
  try {
    const data = await db.select("*").from("exam").where({ id }).first();

    if (data.length >= 1) {
      await db.table("exam").where({ id }).del();
      return { status: 200, msg: "Exam deleted!" };
    }

    return { status: 404, msg: "Exam not found!" };
  } catch (error) {
    return error;
  }
};
