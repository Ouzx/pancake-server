"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const startInSeconds_js_1 = require("../controller/startInSeconds.js");
const router = (0, express_1.Router)();
/* ROUTES */
router.get("/", startInSeconds_js_1.getStartInSecondsData);
exports.default = router;
