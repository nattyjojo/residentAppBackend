import Router from "express";
import validateUserCookie from "../lib/jwt/validateToken.js";
const validateCookie = Router();

validateCookie.post("/validate-cookie", (req, res) => {
  const Reqcookie = req.cookies;
  const cookie = req.body.cookie;

  const validateUserCookieResult = validateUserCookie(cookie);
  if (validateUserCookieResult) {
    res.send(true);
  } else {
    res.send(false);
  }
});

export default validateCookie;
