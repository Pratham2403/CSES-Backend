import Post from "../models/Post.model.js";
import { generateOTP } from "../utils/otp.utils.js";

export const getAllPosts = async (req, res) => {
  console.log("Get All Posts Called", req.body);
  const otp = generateOTP();

  console.log("Generated OTP: ", otp);

  res.status(200).json({ OTP: otp, message: "Get All Posts Called" });
};
