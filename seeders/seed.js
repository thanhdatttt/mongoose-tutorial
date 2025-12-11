import User from "../models/User.js";
import Post from "../models/Post.js";
import { connectDB } from "../db.js";
import mongoose from "mongoose";

await connectDB();

// Cách tạo dữ liệu mẫu seeders

// insertMany, deleteMany

const usersData = [];

for (let i = 1; i <= 20; i++) {
  usersData.push({
    name: `Minh${i}`,
    email: `example${i}@gmail.com`,
    age: 20 + (i % 10),
  });
}

const postsData = [];

for (let i = 1; i <= 20; i++) {
  postsData.push({
    title: `This is a title ${i}`,
    content: `This is a content of title ${i}`,
    user: null,
  });
}

const seedDB = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});

    const insertUsers = await User.insertMany(usersData);

    postsData.forEach((p, index) => {
      p.user = insertUsers[index]._id;
    });

    const insertPosts = await Post.insertMany(postsData);

    console.log("Seeded successfully.");
  } catch (err) {
    console.log(err.message);
  } finally {
    mongoose.connection.close();
  }
};

await seedDB();

process.exit();
