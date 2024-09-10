import db from "../database/database.js";

const table = "event";


export const getEvent = async () => {
  let sql = `SELECT id, name, startDate, endDate,status FROM ${table}`;
  return db.promise().query(sql);
};

//get student using student id
export const getEventById = async (studentId) => {
  let sql = `SELECT * FROM ${table} WHERE id = ?`;  
  return db.promise().query(sql, studentId);
};

