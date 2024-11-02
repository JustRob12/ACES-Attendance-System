import db from "../database/database.js";

const table = "event";

export const createEvent = async (eventData) => {
  let sql = `INSERT INTO ${table} (id, name, description, startDate, endDate, status) VALUES (?,?,?,?,?,?)`;
  const values = [
    eventData.id,
    eventData.name,
    eventData.description,
    eventData.startDate,
    eventData.endDate,
    eventData.status,
  ];

  return db.promise().query(sql, values);
};

export const updateEvent = async (eventId, eventData) =>{
  let sql = `UPDATE ${table} SET name = ?, description= ?, startDate = ?, endDate = ?, status = ? WHERE id = ?`;
  const values = [
    eventData.name,
    eventData.description,
    eventData.startDate,
    eventData.endDate,
    eventData.status,
    eventId,
  ];

  return db.promise().query(sql, values);
}

export const uploadEventBanner = async (eventId, bannerPath) => {
  let sql = `UPDATE ${table} SET banner = ? WHERE id = ?`;
  const values = [bannerPath, eventId];

  return db.promise().query(sql, values);
};

export const getEvent = async () => {
  let sql = `SELECT id, name, description, startDate, endDate, location, banner, status FROM ${table}`;
  return db.promise().query(sql);
};

//get student using student id
export const getEventById = async (eventId) => {
  let sql = `SELECT * FROM ${table} WHERE id = ?`;
  return db.promise().query(sql, eventId);
};
