import { Router } from "express";
import { getUsedTrustedData } from "../controller/usedTrusted.js";
const router = Router();

/* ROUTES */
router.get("/", getUsedTrustedData);

export default router;
