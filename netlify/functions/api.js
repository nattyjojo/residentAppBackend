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
import getUserFiles from "../../routes/getUserFile.js";
import banner from "../../routes/files.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(banner);
app.use(cors(corsOptions));
app.use(register);
app.use(login);
app.use(validateCookie);
app.use(getUser);
app.use(updataUserProfile);
app.use(refreshCookie);
app.use(content);
app.use(getUsers);
app.use(getUserFiles);

export const handler = serverless(app, {
  binary: ["application/json", "image/png"],
  //basePath: "https://residentapp.johnchimezie.online",
});
