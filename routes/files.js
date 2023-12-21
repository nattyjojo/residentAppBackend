import { Router } from "express";
import express from "express";
const banner = Router();

banner.use("/files", express.static());
export default banner;
