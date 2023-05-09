import { Router } from "express";
import { getCakeData } from "../controller/cake.js";
const router = Router();

/* ROUTES */
router.get("/", getCakeData);

export default router;
