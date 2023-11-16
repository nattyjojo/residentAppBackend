import dataBaseconection from "../dataBase/connection.js";
import postSchema from "../dataBase/postSchema.js";
const handleGetPost = async (data) => {
  try {
    await dataBaseconection();
    const post = await postSchema.find();
    return post;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetPost;
