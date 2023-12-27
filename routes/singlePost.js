import { Router } from "express";
import dataBaseconection from "../dataBase/connection.js";
import postSchema from "../dataBase/postSchema.js";
const singlePost = Router();

singlePost.get("/singlePost/:postID", async (req, res) => {
  const postId = req.params;
  try {
    await dataBaseconection();
    const post = await postSchema.findById(postId.postID);
    if (post) {
      res.send(post);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
  }
});

export default singlePost;
