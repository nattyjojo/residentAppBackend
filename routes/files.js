import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const banner = Router();
banner.use("/files/:imagePath", (req, res, next) => {
  console.log(path.dirname(__filename) + "/userFiles");
  next();
});
banner.use(
  "/files/:imagePath",
  express.static(path.dirname(__filename) + "/userFiles")
);
export default banner;
