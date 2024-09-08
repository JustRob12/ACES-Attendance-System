import db from "../database/database.js";
import replacePlaceholders from "../util/replacePlaceholder.js";

const table = "User";

export const createUser = async (userData) => {
  let sql = `INSERT INTO ${table} (id, firstname, lastname, middlename, email, password) VALUES (?,?,?,?,?,?)`;
  const values = [
    userData.userId,
    userData.firstname,
    userData.lastname,
    userData.middlename,
    userData.email,
    userData.password
  ];

  return db.promise().query(sql, values);
};

export const getUser = async () => {
  let sql = `SELECT * FROM ${table} WHERE role != '1'`;
  return db.promise().query(sql);
};

export const getUserByEmail = async (email) => {
  let sql = `SELECT * FROM ${table} WHERE email = ?`;
  const { sql: query, values } = replacePlaceholders(sql,  email );
  return db.promise().query(query, values);
};

export const getUserById = async (id) => {
  let sql = `SELECT * FROM ${table} WHERE id = ?`;
  const { sql: query, values } = replacePlaceholders(sql, id );
  return db.promise().query(query, values);
};

export const updateUser = async (id, userData) => {
  let sql = `UPDATE ${table} SET name = ?, email = ?, password = ? WHERE id = ?`;
  const values = [
    userData.userId,
    userData.firstname,
    userData.lastname,
    userData.middlename,
    userData.email,
    userData.password
  ];
  return db.promise().query(query, values);
};

export const deleteUser = async (id) => {
  let sql = `DELETE FROM ${table} WHERE id = :?`;
  const { sql: query, values } = replacePlaceholders(sql, id );
  return db.promise().query(query, values);
};
