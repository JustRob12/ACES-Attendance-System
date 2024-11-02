import express from "express";

import {authenticate, authorizeRole} from "../middleware/authMiddleware.js";
import { getEvents, findEvent, insertEvent } from "../controller/event.js";


const router = express.Router();

router.post("/event", authenticate, authorizeRole("admin"), express.json(), insertEvent);
router.get("/event", authenticate, getEvents);
router.get("/event/:id", authenticate, findEvent);

export default router;
