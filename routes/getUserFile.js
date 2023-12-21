import { Router } from "express";
import express from "express";

const getUserFiles = Router();

getUserFiles.get("/getfiles/:image", express.static("userFiles"));
export default getUserFiles;
