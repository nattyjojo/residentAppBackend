import dataBaseconection from "../../dataBase/connection.js";
import User from "../../dataBase/UserSchema.js";
import CodeSchema from "../../dataBase/CodeSchema.js";

const registerNewuser = async (userData) => {
  try {
    await dataBaseconection();
    const isValidCode = await CodeSchema.findOne({ code: userData.code });
    if (isValidCode) {
      const registerUser = await User.create({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phoneNumber,
        code: userData.code,
      });
      return "UserRegistered";
    } else {
      return isValidCode;
    }
  } catch (err) {
    console.log(err);
  }
};
export default registerNewuser;
