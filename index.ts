import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import dotenv from "dotenv";

import { cake, footer, startInSeconds, usedTrusted } from "./routes/index.js";

dotenv.config();

const port = process.env.PORT || 8000;
const app: Express = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(morgan("common"));
app.use(cors());

/* ROUTES */
app.use("/cake", cake);
app.use("/footer", footer);
app.use("/startInSeconds", startInSeconds);
app.use("/usedTrusted", usedTrusted);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
