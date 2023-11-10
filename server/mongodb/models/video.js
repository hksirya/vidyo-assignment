import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String, // Assuming you store the video file URL or path
    required: true,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
