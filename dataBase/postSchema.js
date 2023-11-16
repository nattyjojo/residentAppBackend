import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
  poster: String,
  postType: String,
  title: String,
  content: String,
  bannerName: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
const postSchema = mongoose.model("postSchema", newSchema);
export default postSchema;
