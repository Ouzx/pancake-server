"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const footer_1 = require("../controller/footer");
const router = (0, express_1.Router)();
/* ROUTES */
router.get("/", footer_1.getFooterData);
exports.default = router;
