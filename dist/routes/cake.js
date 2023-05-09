"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cake_js_1 = require("../controller/cake.js");
const router = (0, express_1.Router)();
/* ROUTES */
router.get("/", cake_js_1.getCakeData);
exports.default = router;
