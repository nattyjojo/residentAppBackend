import { Router } from "express";
import express from "express";
const banner = Router();

banner.get("/files", express.static("userFiles"));
export default banner;
