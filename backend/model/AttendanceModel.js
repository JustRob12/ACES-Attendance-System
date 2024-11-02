import db from "../database/database.js";

const table = "attendance";

export const createAttendance = async (attendanceData) => {
  let sql = `INSERT INTO ${table} (id, student, event, checkIn, checkOut) VALUES (?,?,?,?,?)`;
  const values = [
    attendanceData.id,
    attendanceData.student,
    attendanceData.event,
    attendanceData.checkIn,
    attendanceData.checkOut,
  ];

  return db.promise().query(sql, values);
};

export const getAttendance = async () => {
  let sql = `SELECT id, student, event, checkIn, checkOut FROM ${table}`;
  return db.promise().query(sql);
};
//get student using student id
export const findAttendance = async (studentId, eventId) => {
  let sql = `SELECT * FROM ${table} WHERE event = ? && student = ?`;
  const values = [eventId, studentId];
  return db.promise().query(sql, values);
};

export const attendanceCheckout = async (attendanceData) => {
  let sql = `UPDATE ${table} SET checkOut = ? WHERE student = ? && event = ? `;
  const values = [
    attendanceData.checkOut,
    attendanceData.student,
    attendanceData.event,
  ];

  return db.promise().query(sql, values);
};
