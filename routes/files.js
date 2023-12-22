import { Router } from "express";
import express from "express";

const banner = Router();

banner.use("/userFile/:image", express.static("userFiles"));
export default banner;
