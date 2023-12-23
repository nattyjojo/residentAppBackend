import express from "express";
import corsOptions from "./middlewares/corsOptions.js";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";
import validateCookie from "./routes/verifyCookie.js";
import getUser from "./routes/getUser.js";
import updataUserProfile from "./routes/updateUserProfile.js";
import refreshCookie from "./routes/refreshCookie.js";
import content from "./routes/post.js";
import getUsers from "./routes/get-users.js";

const app = express();
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://657ad870f0f6a8000860e6da--dainty-selkie-5509f1.netlify.app"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use("/userFile/:image", (req, res, next) => {
//   console.log(req.params);
//   next();
// });

app.use("/userFile/:image", express.static("userFiles/banner"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(register);
app.use(login);
app.use(validateCookie);
app.use(getUser);
app.use(updataUserProfile);
app.use(refreshCookie);
app.use(content);
app.use(getUsers);

app.listen(4000, () => {
  console.log("lossss");
});
//export default app;
