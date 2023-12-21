import { Router } from "express";
const banner = Router();

banner.use("/files/:imagePath", express.static("userFiles"));
export default banner;
