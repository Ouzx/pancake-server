"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usedTrusted_js_1 = require("../controller/usedTrusted.js");
const router = (0, express_1.Router)();
/* ROUTES */
router.get("/", usedTrusted_js_1.getUsedTrustedData);
exports.default = router;
