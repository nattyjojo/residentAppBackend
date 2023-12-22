import { Router } from "express";
import express from "express";

const banner = Router();

banner.use("/files/:imagePath", express.static("./userFiles"));
export default banner;
