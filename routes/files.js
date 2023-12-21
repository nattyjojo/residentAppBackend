import { Router } from "express";
import express from "express";
const banner = Router();
banner.use("/files/:image", (req, res, next) => {
  next();
});
banner.use("/files/:image", express.static("./userFiles"));
export default banner;
