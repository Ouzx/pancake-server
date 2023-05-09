"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = require("./routes/index.js");
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "30mb" }));
app.use(express_1.default.urlencoded({ limit: "30mb", extended: true }));
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)());
app.use("/media", express_1.default.static(process.cwd() + "/public/"));
/* ROUTES */
app.use("/cake", index_js_1.cake);
app.use("/footer", index_js_1.footer);
app.use("/startInSeconds", index_js_1.startInSeconds);
app.use("/usedTrusted", index_js_1.usedTrusted);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
