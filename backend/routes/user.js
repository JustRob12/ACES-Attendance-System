import express from "express";
import authenticate from "../middleware/authMiddleware.js";
import { findUser, uploadProfile } from "../controller/user.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.get("/user", authenticate, findUser);
router.patch(
  "/user/uploadProfilePic",
  upload.single("profilePicture"),
  authenticate,
  uploadProfile
);

export default router;
