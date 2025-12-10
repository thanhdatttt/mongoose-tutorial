import express from "express";
import http from "http";
import { connectDB } from "./db.js";
import { config } from "./config.js";

const app = express();
const server = http.createServer(app);

connectDB().then(async() => {
    server.listen(config.PORT, () => {
        console.log("Server is listening on port: ", config.PORT);
    })
});