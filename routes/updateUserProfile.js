import { Router } from "express";
import multer from "multer";
import isRegistered from "../lib/registerUser/isRegistered.js";
import validateRequest from "../middlewares/validateRequest.js";
import updateExistingUser from "../lib/registerUser/updateExistinUser.js";
const updataUserProfile = Router();
import bodyParser from "body-parser";

updataUserProfile.use(bodyParser.json());
updataUserProfile.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.fieldname === "idCard") {
      const path = `userFiles/idCards/`;

      callback(null, path);
    }
    if (file.fieldname === `profilePhoto`) {
      const path = `userFiles/profilePhotos/`;
      callback(null, path);
    }
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const fileStorage = multer({ storage: storage });

updataUserProfile.post(
  "/update-user-data",
  fileStorage.fields([{ name: "profilePhoto" }, { name: "idCard" }]),
  (req, res) => {
    const upLoadedFiles = {
      profilePhotoData: req.files.profilePhoto[0],
      idCardData: req.files.idCard[0],
    };
    const userEmail = req.body.UserEmail;
    const updateUserData = updateExistingUser(userEmail, upLoadedFiles);
    res.send("Files uploaded successfully");
  }
);

export default updataUserProfile;
