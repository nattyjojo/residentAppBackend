import serverless from "serverless-http";
import express from "express";
import corsOptions from "../../../middlewares/corsOptions.js";
import cors from "cors";
import register from "../../register.js";
import login from "../../login.js";
import validateCookie from "../../verifyCookie.js";
import getUser from "../../getUser.js";
import updataUserProfile from "../../updateUserProfile.js";
import refreshCookie from "../../refreshCookie.js";
import content from "../../post.js";
import getUsers from "../../get-users.js";
import cookieParser from "cookie-parser";
import banner from "../../files.js";

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/userFile/:image", banner);
app.use(register);
app.use(login);
app.use(validateCookie);
app.use(getUser);
app.use(updataUserProfile);
app.use(refreshCookie);
app.use(content);
app.use(getUsers);
export const handler = serverless(app, {
  binary: ["image/png", "image/gif", "image/jpeg"], //imege.jpeg/"image/png", "image/gif"
  // basePath: "localhost",
  // basePath: "residentapi.johnchimezie.online",
  // basePath: "residentapi.johnchimezie.online",
});
