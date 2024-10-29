import express from "express";
import postRoutes from "./Post.route.js";

const routes = express.Router();

routes.use("/post", postRoutes);
// routes.use("/user", userRoutes);

export default routes;
