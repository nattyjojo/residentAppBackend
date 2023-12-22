import { Router } from "express";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const banner = Router();
const __dirname = path.dirname(__filename) + "/userFiles";
banner.use("/files/:imagePath", (req, res, next) => {
  console.log(__dirname);
  next();
});
banner.use("/files/:imagePath", express.static(__dirname));
export default banner;
