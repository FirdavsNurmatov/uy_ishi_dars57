import db from "../database/index.js";

export const getAllAssigmentsService = async () => {
  try {
    const allData = await db.select("*").from("assigment");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getAssigmentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("assigment").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Assigment not found!" };
  } catch (error) {
    return error;
  }
};

export const createAssigmentService = async (courseData) => {
  try {
    const id = courseData?.id;
    const oldData = await db
      .select("*")
      .from("assigment")
      .where({ id })
      .first();

    if (oldData.length >= 1) {
      return { status: 401, msg: "Assigment already exists!" };
    }

    await db.table("assigment").insert(courseData);

    return { status: 200, msg: "Assigment created!" };
  } catch (error) {
    return error;
  }
};

export const updateAssigmentByIdService = async (id, courseData) => {
  try {
    const data = await db.select("*").from("assigment").where({ id }).first();

    if (data.length >= 1) {
      await db.table("assigment").where({ id }).update(courseData);
      return { status: 200, msg: "Assigment updated!" };
    }

    return { status: 404, msg: "Assigment not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteAssigmentByIdService = async (id) => {
  try {
    const data = await db.select("*").from("assigment").where({ id }).first();

    if (data.length >= 1) {
      await db.table("assigment").where({ id }).del();
      return { status: 200, msg: "Assigment deleted!" };
    }

    return { status: 404, msg: "Assigment not found!" };
  } catch (error) {
    return error;
  }
};
