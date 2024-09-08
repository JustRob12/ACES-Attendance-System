import db from "../database/database.js";
import replacePlaceholders from "../util/replacePlaceholder.js";

export const createUser = async (userData) => {
  let sql = 'INSERT INTO User (name, email, password) VALUES (:name, :email, :password)';
  const { sql: query, values } = replacePlaceholders(sql, userData);
  return db.promise().query(query, values);
};

export const getUserById = async (id) => {
  let sql = 'SELECT * FROM User WHERE id = :id';
  const { sql: query, values } = replacePlaceholders(sql, { id });
  return db.promise().query(query, values);
};

export const updateUser = async (id, userData) => {
  let sql = 'UPDATE User SET name = :name, email = :email, password = :password WHERE id = :id';
  const { sql: query, values } = replacePlaceholders(sql, { ...userData, id });
  return db.promise().query(query, values);
};

export const deleteUser = async (id) => {
  let sql = 'DELETE FROM User WHERE id = :id';
  const { sql: query, values } = replacePlaceholders(sql, { id });
  return db.promise().query(query, values);
};


