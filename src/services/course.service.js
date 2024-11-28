import db from "../database/index.js";

export const getAllCoursesService = async () => {
  try {
    const allData = await db.select("*").from("courses");

    return allData;
  } catch (error) {
    return error;
  }
};

export const getCourseByIdService = async (id) => {
  try {
    const data = await db.select("*").from("courses").where({ id }).first();

    if (data.length >= 1) {
      return { status: 200, msg: data };
    }

    return { status: 404, msg: "Course not found!" };
  } catch (error) {
    return error;
  }
};

export const createCourseService = async (courseData) => {
  try {
    const id = courseData?.id;
    const oldData = await db.select("*").from("courses").where({ id }).first();

    if (oldData.length >= 1) {
      return { status: 401, msg: "Course already exists!" };
    }

    await db.table("courses").insert(courseData);

    return { status: 200, msg: "Course created!" };
  } catch (error) {
    return error;
  }
};

export const updateCourseByIdService = async (id, courseData) => {
  try {
    const data = await db.select("*").from("courses").where({ id }).first();

    if (data.length >= 1) {
      await db.table("courses").where({ id }).update(courseData);
      return { status: 200, msg: "Course updated!" };
    }

    return { status: 404, msg: "Course not found!" };
  } catch (error) {
    return error;
  }
};

export const deleteCourseByIdService = async (id) => {
  try {
    const data = await db.select("*").from("courses").where({ id }).first();

    if (data.length >= 1) {
      await db.table("courses").where({ id }).del();
      return { status: 200, msg: "Course deleted!" };
    }

    return { status: 404, msg: "Course not found!" };
  } catch (error) {
    return error;
  }
};
