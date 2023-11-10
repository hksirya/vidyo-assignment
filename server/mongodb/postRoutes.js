import express from "express";
import * as dotenv from "dotenv";
import Video from "../mongodb/models/video.js";

dotenv.config();
const router = express.Router();

router.route("/allVideo").get(async (req, res) => {
  try {
    const allPosts = await Video.find({});
    res.status(200).json({ success: true, data: allPosts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Fetching posts failed, please try again",
    });
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params; // Retrieve the post ID from the URL params

  try {
    const post = await Video.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ success: true, data: post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

router.route("/").post(async (req, res) => {
  console.log(req.body);
  try {
    const { title, video } = req.body;

    const newPost = await Video.create({
      title,
      video,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, please try again",
    });
  }
});

export default router;
