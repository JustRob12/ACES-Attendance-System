import express from "express";

import authenticate from "../middleware/authMiddleware.js";
import { getEvent, findEvent } from "../controller/event.js";


const router = express.Router();

router.get("/user", authenticate, getEvent);
router.get("/user", authenticate, findEvent);
export default router;
