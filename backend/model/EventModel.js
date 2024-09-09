import db from "../database/database.js";

const table = "Event";


export const getEvent = async () => {
  let sql = `SELECT * FROM ${table}`;
  return db.promise().query(sql);
};

//get student using student id
export const getEventById = async (studentId) => {
  let sql = `SELECT * FROM ${table} WHERE studId = ?`;  
  return db.promise().query(sql, studentId);
};

