import express from "express";
import { login, register } from "../controller/auth/authController.js";
import {
  loginValidationRules,
  userValidationRules,
  validate,
} from "../middleware/validator.js";
import authenticate from "../middleware/authMiddleware.js";
import { findUser } from "../controller/user.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

//login route
router.post("/login",express.json(), loginValidationRules(), validate, login);
router.post(
  "/register",
  upload.single("profilePicture"),
  userValidationRules(),
  validate,
  register
);
router.get("/user", authenticate, findUser);
export default router;
