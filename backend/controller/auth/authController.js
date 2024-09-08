import UserModel from "../../model/userModel.js";
import jwt from "jsonwebtoken";

const KEY = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      KEY, //secret key
      { expiresIn: "1h" } // Token expiration time
    );
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
