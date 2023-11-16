import { Router } from "express";
import validateUserCookie from "../lib/jwt/validateToken.js";
import isRegistered from "../lib/registerUser/isRegistered.js";

const getUser = Router();

getUser.post("/get-user", async (req, res) => {
  try {
    const userData = req.body.cookie;
    try {
      const jwtVerify = validateUserCookie(userData);

      if (jwtVerify) {
        const userData = { email: jwtVerify.userData };

        const getUserdata = await isRegistered(userData);
        if (getUserdata) {
          res.send(getUserdata);
        }
      } else {
        res.send(null);
      }
    } catch (err) {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
  }
});
export default getUser;
