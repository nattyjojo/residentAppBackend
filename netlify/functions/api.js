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
app.use(express.json());
app.use(cookieParser());

app.use(cors(corsOptions));
app.use(register);
app.use(login);
app.use(validateCookie);
app.use(getUser);
app.use(updataUserProfile);
app.use(refreshCookie);
app.use(content);
app.use(getUsers);
app.use(banner);
export const handler = serverless(app, {
  binary: ["image/*"],

  basePath: "https://residentapp.johnchimezie.online",
});
// https://residentapi.johnchimezie.online/files/userFiles/banner/ad56b096-5b9e-430c-a4b6-c544cbb23a7a-banner.png
//https://residentapp.johnchimezie.online/_ipx/w_128,q_75/https%3A%2F%2Fresidentapi.johnchimezie.online%2Ffiles%2Fbanner%2Fad56b096-5b9e-430c-a4b6-c544cbb23a7a-banner.png?url=https%3A%2F%2Fresidentapi.johnchimezie.online%2Ffiles%2Fbanner%2Fad56b096-5b9e-430c-a4b6-c544cbb23a7a-banner.png&w=128&q=75
//"application/json",
