import { Router } from "express";
import express from "express";
const banner = Router();

banner.use("/files/:imagePath", express.static("netlify/functions/userFiles"));
export default banner;
