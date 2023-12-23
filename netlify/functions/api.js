import serverless from "serverless-http";
import express from "express";
import corsOptions from "../../middlewares/corsOptions.js";
import cors from "cors";
import register from "../../routes/register.js";
import login from "../../routes/login.js";
import validateCookie from "../../routes/verifyCookie.js";
import getUser from "../../routes/getUser.js";
import updataUserProfile from "../../routes/updateUserProfile.js";
import refreshCookie from "../../routes/refreshCookie.js";
import content from "../../routes/post.js";
import getUsers from "../../routes/get-users.js";
import cookieParser from "cookie-parser";
import banner from "../../routes/files.js";

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(banner);
app.use(register);
app.use(login);
app.use(validateCookie);
app.use(getUser);
app.use(updataUserProfile);
app.use(refreshCookie);
app.use(content);
app.use(getUsers);
export const handler = serverless(app, {
  //binary: false,
  binary: ["image/*"], //imege.jpeg/"image/png", "image/gif"
  basePath: "localhost",
  // basePath: "https://residentapi.johnchimezie.online",
});
