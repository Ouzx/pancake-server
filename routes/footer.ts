import { Router } from "express";
import { getFooterData } from "../controller/footer";
const router = Router();

/* ROUTES */
router.get("/", getFooterData);

export default router;
