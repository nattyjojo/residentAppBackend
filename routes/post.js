// import { Router } from "express";
// import handlePost from "../lib/handlePost.js";
// import handleGetPost from "../lib/getPost.js";
// import multer from "multer";
// import bodyParser from "body-parser";

// const content = Router();
// content.use(bodyParser.json());
// content.use(bodyParser.urlencoded({ extended: true }));
// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     path = `userFiles/banner/`;

//     callback(null, path);
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

// const fileStorage = multer({ storage: storage });

// content.post(
//   "/post",
//   fileStorage.fields([{ name: "banner" }]),
//   async (req, res) => {
//     const data = req.body;
//     console.log({ res: req.files });
//     await handlePost(data);
//     res.send("Files uploaded successfully");
//   }
// );

// content.get("/post", async (req, res) => {
//   const getPosts = await handleGetPost();

//   console.log({ getPosts: getPosts });

//   res.send(getPosts);
// });
// export default content;
import { Router } from "express";
import handlePost from "../lib/handlePost.js";
import handleGetPost from "../lib/getPost.js";
import multer from "multer";
import bodyParser from "body-parser";

const content = Router();
content.use(bodyParser.json());
content.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const path = `/../userFiles/banner/`;
    callback(null, path);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const fileStorage = multer({ storage: storage });

content.post(
  "/post",
  fileStorage.fields([{ name: "banner" }]),
  async (req, res) => {
    const data = req.body;
    await handlePost(data);
    res.send("Files uploaded successfully");
  }
);

content.get("/post/:type", async (req, res) => {
  const postType = req.params;
  const getPosts = await handleGetPost(postType);
  res.send(getPosts);
});

export default content;
