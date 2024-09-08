import db from "../database/database.js";
import replacePlaceholders from "../util/replacePlaceholder.js";

const table = "Student";

export const createStudent = async (userData) => {
  let sql = `INSERT INTO ${table} (userId, course, year, profilePicture) VALUES (:userId, :course, :year, :profilePicture)`;
  const { sql: query, values } = replacePlaceholders(sql, userData);
  return db.promise().query(query, values);
};

export const getStudent = async () => {
  let sql = `SELECT * FROM ${table}`;
  return db.promise().query(sql);
};

export const getStudentById = async (id) => {
  let sql = `SELECT * FROM ${table} WHERE studentId = :studentId`;
  const { sql: query, values } = replacePlaceholders(sql, { id });
  return db.promise().query(query, values);
};

export const updateStudent = async (id, userData) => {
  let sql = `UPDATE ${table} SET course = :course, year = :year, profilePicture = :profilePicture WHERE studentId = :studentId`;
  const { sql: query, values } = replacePlaceholders(sql, { ...userData, id });
  return db.promise().query(query, values);
};

export const deleteStudent = async (id) => {
  let sql = `DELETE FROM ${table} WHERE id = :id`;
  const { sql: query, values } = replacePlaceholders(sql, { id });
  return db.promise().query(query, values);
};
