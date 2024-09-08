import { createStudent, getStudentById, } from "../../model/StudentModel.js";
import { createUser, getUserByEmail } from "../../model/UserModel.js";
import jwt from "jsonwebtoken";

const KEY = process.env.JWT_SECRET;

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const [rows] = await getUserByEmail(email);
    const user = rows[0];

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
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
export const register = async(req, res) =>{

}
