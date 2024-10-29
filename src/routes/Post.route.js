import { getAllPosts } from "../controllers/Post.controller.js";
import { postMiddleware } from "../middlewares/Post.middleware.js";
import express from "express";

const postRoutes = express.Router();

postRoutes.get("/", postMiddleware, getAllPosts);

export default postRoutes;
