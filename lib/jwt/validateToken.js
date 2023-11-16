import Jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const validateUserCookie = (cookie) => {
  try {
    const jwtVerify = Jwt.verify(cookie, process.env.Foyer_Jwt_Sign);

    return jwtVerify;
  } catch (err) {
    return null;
  }
};
export default validateUserCookie;
