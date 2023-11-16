// const current = new Date();
// const added = new Date(current.getTime() + 32 * 60 * 1000);
// const diff = added - current;
// // console.log({ current: current });
// // console.log({ added: added });
// // console.log({ diff: diff });
// console.log(new Date(added));
// console.log(diff);
// //120000
// //exp: Math.floor(Date.now() / 1000) + 60 * 50

//const randomChar = crypto.randomUUID();

import User from "../dataBase/UserSchema.js";
import postSchema from "../dataBase/postSchema.js";
import mongoose from "mongoose";

const deleteAll = async () => {
  try {
    const connection = await mongoose.connect(FOYER_DATA_BASE);
    //
    await User.deleteMany({});
    await postSchema.deleteMany({});
    console.log("done");
  } catch (err) {
    console.log(err);
  }
};
deleteAll();
