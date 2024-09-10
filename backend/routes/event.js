import express from "express";

import authenticate from "../middleware/authMiddleware.js";
import { getEvents, findEvent } from "../controller/event.js";


const router = express.Router();

router.get("/event", authenticate, getEvents);
router.get("/event/:id", authenticate, findEvent);

export default router;
