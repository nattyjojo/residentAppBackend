import { Router } from "express";
import express from "express";
import path from "path";

const banner = Router();

banner.use("/userFile/:image", express.static("userFiles"));
// banner.use(
//   "/userFile/:image",
//   express.static(path.join(__dirname, "userFiles"))
// );
export default banner;
