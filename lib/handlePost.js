import dataBaseconection from "../dataBase/connection.js";
import postSchema from "../dataBase/postSchema.js";
const handlePost = async (data) => {
  try {
    await dataBaseconection();
    const post = await postSchema.create({
      poster: data.poster,
      postType: data.postType,
      title: data.title,
      content: data.content,
      bannerName: data.bannerName,
      type: data.type,
    });
    console.log(post);
  } catch (err) {
    console.log(err);
  }
};
export default handlePost;
