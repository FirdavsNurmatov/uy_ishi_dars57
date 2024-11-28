import db from "../database/index.js";

export const getAllHomeworksService = async () => {
  try {
    const allData = await db.select("*").from("homework");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getHomeworkByIdService = async (id) => {
  try {
    const data = await db.select("*").from("homework").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Homework not found!" };
  } catch (error) {
    return error;
  }
};

export const createHomeworkService = async (homeworkData) => {
  try {
    const id = homeworkData?.id;
    const oldData = await db.select("*").from("homework").where({ id }).first();

    if (oldData.length >= 1) {
      return { status: 401, msg: "Homework already exists!" };
    }

    await db.table("homework").insert(homeworkData);

    return { status: 200, msg: "Homework created!" };
  } catch (error) {
    return error;
  }
};

export const updateHomeworkByIdService = async (id, homeworkData) => {
  try {
    const data = await db.select("*").from("homework").where({ id }).first();

    if (data.length >= 1) {
      await db.table("homework").where({ id }).update(homeworkData);
      return { status: 200, msg: "Homework updated!" };
    }

    return { status: 404, msg: "Homework not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteHomeworkByIdService = async (id) => {
  try {
    const data = await db.select("*").from("homework").where({ id }).first();

    if (data.length >= 1) {
      await db.table("homework").where({ id }).del();
      return { status: 200, msg: "Homework deleted!" };
    }

    return { status: 404, msg: "Homework not found!" };
  } catch (error) {
    return error;
  }
};
