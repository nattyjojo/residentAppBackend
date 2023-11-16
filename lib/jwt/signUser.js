import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const signUser = (userData) => {
  const currentDate = new Date();
  const expireTime = new Date(currentDate.getTime() + 32 * 60 * 1000);
  const signUser = Jwt.sign(
    {
      userData,
      exp: Math.floor(expireTime.getTime() / 1000),
    },
    process.env.Foyer_Jwt_Sign
  );
  return signUser;
};
export default signUser;
