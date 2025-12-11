import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("user", "name age");

    res.status(200).json({ message: "Get posts successfully.", posts: posts });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
