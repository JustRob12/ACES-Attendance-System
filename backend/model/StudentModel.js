import db from "../database/database.js";
import replacePlaceholders from "../util/replacePlaceholder.js";

const table = "Student";

export const createStudent = async (userData) => {
  let sql = `INSERT INTO ${table} (studId, userId, course, year, profilePicture) VALUES (?,?,?,?,?)`;
  const values = [
    userData.studentId,
    userData.userId,
    userData.course,
    userData.year,
    userData.profilePicture
  ];
  return db.promise().query(sql, values);
};

export const getStudent = async () => {
  let sql = `SELECT * FROM ${table}`;
  return db.promise().query(sql);
};

export const getStudentById = async (studentId) => {
  let sql = `SELECT * FROM ${table} WHERE userId = ?`;  
  return db.promise().query(sql, studentId);
};

export const updateStudent = async (id, userData) => {
  let sql = `UPDATE ${table} SET course = ?, year = ?, profilePicture = ? WHERE studentId = ?`;
  const values = [
    userData.studentId,
    userData.userId,
    userData.course,
    userData.year,
    userData.profilePicture
  ];
  
  return db.promise().query(query, values);
};

