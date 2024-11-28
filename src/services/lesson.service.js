import db from "../database/index.js";

export const getAllLessonsService = async () => {
  try {
    const allData = await db.select("*").from("lesson");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getLessonByIdService = async (id) => {
  try {
    const data = await db.select("*").from("lesson").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Lesson not found!" };
  } catch (error) {
    return error;
  }
};

export const createLessonService = async (lessonData) => {
  try {
    const id = lessonData?.id;
    const oldData = await db.select("*").from("lesson").where({ id }).first();

    if (oldData.length >= 1) {
      return { status: 401, msg: "Lesson already exists!" };
    }

    await db.table("lesson").insert(lessonData);

    return { status: 200, msg: "Lesson created!" };
  } catch (error) {
    return error;
  }
};

export const updateLessonByIdService = async (id, lessonData) => {
  try {
    const data = await db.select("*").from("lesson").where({ id }).first();

    if (data.length >= 1) {
      await db.table("lesson").where({ id }).update(lessonData);
      return { status: 200, msg: "Lesson updated!" };
    }

    return { status: 404, msg: "Lesson not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteLessonByIdService = async (id) => {
  try {
    const data = await db.select("*").from("lesson").where({ id }).first();

    if (data.length >= 1) {
      await db.table("lesson").where({ id }).del();
      return { status: 200, msg: "Lesson deleted!" };
    }

    return { status: 404, msg: "Lesson not found!" };
  } catch (error) {
    return error;
  }
};
