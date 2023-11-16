import dataBaseconection from "../dataBase/connection.js";
import User from "../dataBase/UserSchema.js";

const getUsersData = async () => {
  try {
    const userRegexPattern = /:u/;
    await dataBaseconection();
    const users = await User.find({ code: userRegexPattern });

    return users;
  } catch (err) {
    console.log(err);
  }
};
export default getUsersData;
