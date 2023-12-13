import dataBaseconection from "../../dataBase/connection.js";
import User from "../../dataBase/UserSchema.js";

const isRegistered = async (userData) => {
  try {
    const userEmail = userData.email;
    await dataBaseconection();
    const isExistingUser = await User.findOne({
      email: userEmail,
    });
    return isExistingUser;
  } catch (err) {
    console.log(err);
  }
};
export default isRegistered;
