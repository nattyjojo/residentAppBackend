import mongoose from "mongoose";

const userRegisterationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String,
  code: String,
  verrifiedEmail: {
    type: Boolean,
    default: false,
  },

  files: {
    profilePhotoData: {
      fieldName: {
        type: String,
        default: null,
      },
      filename: {
        type: String,
        default: null,
      },
      path: {
        type: String,
        default: null,
      },
    },
    idCardData: {
      fieldName: {
        type: String,
        default: null,
      },
      filename: {
        type: String,
        default: null,
      },
      path: {
        type: String,
        default: null,
      },
      expireDate: {
        type: String,
        default: null, // Set the default value to null
      },
    },
  },
  profileCompleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("User", userRegisterationSchema);

export default User;
