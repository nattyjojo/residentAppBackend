import { Router } from "express";
import bcryptHash from "../lib/bycrpt/hash.js";
import isRegistered from "../lib/registerUser/isRegistered.js";
import registerNewuser from "../lib/registerUser/registerNewuser.js";
import ValidateEmail from "../lib/isEmail/validateEmail.js";
import verificationEmail from "../lib/nodeMailer/verificationEmail.js";
const register = Router();

register.post("/register", async (req, res) => {
  const userData = req.body;
  try {
    const validateUserEmail = await ValidateEmail(userData.email);
    if (!validateUserEmail) {
      res.send({ message: false });
      return;
    }

    const hashPassword = await bcryptHash(userData.password);
    userData.password = hashPassword;
    const isUserRegistered = await isRegistered(userData);
    if (!isUserRegistered) {
      const registernew = await registerNewuser(userData);
      const verificationEmailResult = await verificationEmail(userData.email);
      res.send({ message: true });
    } else {
      res.send({ message: false });
    }
  } catch (err) {
    console.log(err);
  }
});

export default register;
