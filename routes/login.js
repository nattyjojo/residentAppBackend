import { Router } from "express";
import isRegistered from "../lib/registerUser/isRegistered.js";
import bcryptCompare from "../lib/bycrpt/compare.js";
import signUser from "../lib/jwt/signUser.js";
import dotenv from "dotenv";
dotenv.config();
const login = Router();

login.post("/login", async (req, res) => {
  const origin = req.headers.origin;
  const userData = req.body;
  const localOrigin = process.env.RESIDENT_ADDRESS;
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
        const cookieOptions = {
          SameSite: "None",
          secure: true,
          domain: "johnchimezie.online",
        };
        res.cookie("jwt", jwtSign, cookieOptions);

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
