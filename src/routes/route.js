import express from "express";
import postRoutes from "./Post.route.js";
// import userRoutes from "./User.route.js";

const routes = express.Router();

routes.use("/post", postRoutes);
// routes.use("/user", userRoutes);

export default routes;
