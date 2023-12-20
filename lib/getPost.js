import dataBaseconection from "../dataBase/connection.js";
import postSchema from "../dataBase/postSchema.js";
const handleGetPost = async (postType) => {
  if (postType.type === "blog") {
    try {
      await dataBaseconection();
      const post = await postSchema.find({ postType: "post" });
      return post;
    } catch (err) {
      console.log(err);
    }
  }
  if (postType.type === "all") {
    try {
      await dataBaseconection();
      const post = await postSchema.find({});
      return post;
    } catch (err) {
      console.log(err);
    }
  }
};
export default handleGetPost;
