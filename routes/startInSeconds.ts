import { Router } from "express";
import { getStartInSecondsData } from "../controller/startInSeconds.js";
const router = Router();

/* ROUTES */
router.get("/", getStartInSecondsData);

export default router;
