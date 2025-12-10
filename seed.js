import User from "./models/User.js";
import Post from "./models/Post.js";
import { connectDB } from "./db.js";

await connectDB();

await User.create([
    {name: "Dat", email: "example@gmail.com", age: 20},
]);
await Post.create([
    {title: "test", content: "hello world"}
]);
console.log("Data created successfully");

process.exit();
