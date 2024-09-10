import express from "express";
import { login, register } from "../controller/auth/authController.js";
import {
  loginValidationRules,
  userValidationRules,
  validate,
} from "../middleware/validator.js";
import authenticate from "../middleware/authMiddleware.js";
import { findUser, uploadProfile } from "../controller/user.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

//login route
router.post("/login", express.json(), loginValidationRules(), validate, login);
//registration route
router.post(
  "/register",
  upload.single("profilePicture"),
  userValidationRules(),
  validate,
  register
);
router.get("/user", authenticate, findUser);
router.patch(
  "/user/uploadProfilePic",
  upload.single("profilePicture"),
  authenticate,
  uploadProfile
);
export default router;
