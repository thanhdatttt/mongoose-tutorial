import { Router } from "express";
import { getPosts } from "../controllers/postsControllers.js";
const router = Router();

router.get("/", getPosts);

export default router;
