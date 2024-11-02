import express from "express";

import {authenticate, authorizeRole} from "../middleware/authMiddleware.js";
import { markAttendance } from "../controller/attendance.js";


const router = express.Router();

router.post("/attendance", authenticate, authorizeRole("admin"), express.json(), markAttendance);
// router.get("/event", authenticate, getAttendance);
// router.get("/event/:id", authenticate, f);

export default router;
