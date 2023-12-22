import { Router } from "express";
import express from "express";

const banner = Router();

banner.get("files/:image", (req, res, next) => {
  console.log(req.headers);
  res.send("hello");
  //next();
});
//banner.use("files:image", express.static("userFiles"));
export default banner;
