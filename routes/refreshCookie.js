import { Router } from "express";
import validateUserCookie from "../lib/jwt/validateToken.js";
import signUser from "../lib/jwt/signUser.js";

const refreshCookie = Router();

refreshCookie.post("/refresh-cookie", (req, res) => {
  const userCookie = req.body.cookie;
  const validate = validateUserCookie(userCookie);
  console.log({ validate: validate });
  if (!validate) {
    res.send(false);
    return;
  }

  const userEmail = validate.userData;
  const exp = validate.exp;
  const convertToMilSec = new Date(exp * 1000);
  const expReadable = new Date(convertToMilSec);
  const diff = expReadable - new Date();
  if (diff <= 120000) {
    const refreshUserCookie = signUser(userEmail);
    res.cookie("jwt", refreshUserCookie);
    res.send("refreshed");
  }
  res.send("still valid");
});
export default refreshCookie;
