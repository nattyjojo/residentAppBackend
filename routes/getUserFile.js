import { Router } from "express";
import { promises as fsPromises } from "fs";
const getUserFiles = Router();
getUserFiles.get("/getfiles/:image", (req, res) => {});
export default getUserFiles;
