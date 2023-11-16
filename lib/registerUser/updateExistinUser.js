import User from "../../dataBase/UserSchema.js";
import dataBaseconection from "../../dataBase/connection.js";
const updateExistingUser = async (email, data) => {
  const profilePhotoDataFieldname = data.profilePhotoData.fieldname;
  const profilePhotoDataFilename = data.profilePhotoData.filename;
  const profilePhotoDataPath = data.profilePhotoData.path;

  const idCardDataFieldname = data.idCardData.fieldname;
  const idCardDataFilename = data.idCardData.filename;
  const idCardDataPath = data.idCardData.path;

  try {
    await dataBaseconection();

    const updataUser = await User.updateOne(
      { email: email },
      {
        "files.profilePhotoData.fieldName": profilePhotoDataFieldname,
        "files.profilePhotoData.filename": profilePhotoDataFilename,
        "files.profilePhotoData.path": profilePhotoDataPath,

        "files.idCardData.fieldName": idCardDataFieldname,
        "files.idCardData.filename": idCardDataFilename,
        "files.idCardData.path": idCardDataPath,
        profileCompleted: true,
      }
    );
    console.log(updataUser);
  } catch (err) {
    console.log(err);
  }
};
export default updateExistingUser;
