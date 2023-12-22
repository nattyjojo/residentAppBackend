import { Router } from "express";
import express from "express";

const banner = Router();

banner.use(express.static("userFiles"));
banner.get("files", (req, res) => {
  res.send("ok");
});
export default banner;
