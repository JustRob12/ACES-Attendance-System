import express from "express";
// import {
//   createUser,
//   findUser,
//   getUsers,
//   updateUser,
//   deleteUser,
// } from "../controller/userController.js";
import { login, register } from "../controller/auth/authController.js";
import { loginValidationRules, userValidationRules, validate } from "../middleware/validator.js";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();

//user pages routes
// router.post("/users", userValidationRules(), validate, authenticate, createUser);
// router.get("/users", authenticate, getUsers);
// router.get("/users/:id", authenticate, findUser);
// router.patch("/users:id", userValidationRules(), validate, authenticate, updateUser);
// router.delete("/users:id", authenticate,  deleteUser);
//login route
router.post("/login",loginValidationRules(), validate, login)
router.post("/register",userValidationRules(),validate, register)

export default router;
