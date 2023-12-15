import { Router } from "express";
import isRegistered from "../lib/registerUser/isRegistered.js";
import bcryptCompare from "../lib/bycrpt/compare.js";
import signUser from "../lib/jwt/signUser.js";
import cookieParser from "cookie-parser";
const login = Router();
login.use(cookieParser());

login.post("/login", async (req, res) => {
  console.log(req.header);
  const userData = req.body;
  try {
    const isExistingUser = await isRegistered(userData);
    if (!isExistingUser) {
      res.send(false);
      return;
    }
    const compareUserPassword = await bcryptCompare(
      userData.password,
      isExistingUser.password
    );

    if (isExistingUser && compareUserPassword) {
      const code = isExistingUser.code;
      const codeType = code.split(":")[1];

      try {
        const jwtSign = signUser(userData.email);

        res.cookie("jwt", jwtSign, {
          sameSite: "None",
          secure: true,
          domain: ".netlify.app",
        });
        if (codeType === "u") {
          res.send("user");
        } else {
          codeType === "a";
          res.send("admin");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      res.send(false);
    }
  } catch (err) {
    res.send(false);
    console.log(err);
  }
});

export default login;

// {
//   // httpOnly: false,
//   // secure: false,
//   expires: new Date(new Date().getTime() + ms("50m")), // Convert '15m' to milliseconds
// }
