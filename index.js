import express from "express";
import http from "http";
import { connectDB } from "./db.js";
import { config } from "./config.js";
import usersRoutes from "./routes/usersRoutes.js";
import postsRoutes from "./routes/postsRoutes.js";
import cors from "cors";
const app = express();
const server = http.createServer(app);

connectDB().then(async () => {
  server.listen(config.PORT, () => {
    console.log("Server is listening on port: ", config.PORT);
  });
});

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
