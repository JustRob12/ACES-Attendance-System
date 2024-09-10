import { ulid } from "ulidx";
import bcrypt from "bcryptjs";
import { createStudent, getStudentById } from "../../model/StudentModel.js";
import { createUser, getUserByEmail } from "../../model/UserModel.js";
import jwt from "jsonwebtoken";
import path from "path";

const KEY = process.env.JWT_SECRET;

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const [rows] = await getUserByEmail(email);
    const user = rows[0];

    if (!user) {
      const error = new Error("Invalid email or password");
      error.status = 400;
      error.success = false;
      return next(error);
    }

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new Error("Invalid email or password");
      error.status = 400;
      error.success = false;
      return next(error);
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      KEY, //secret key
      { expiresIn: "1h" } // Token expiration time
    );
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 500;
    error.success = false;
    return next(error);
  }
};
export const register = async (req, res, next) => {
  const profilePic = req.file; // Access the uploaded file
  //require upload profile pic
  // if (!profilePic) {
  //   const error = new Error("No profile picture uploaded");
  //   error.status = 400;
  //   error.success = false;
  //   return next(error);
  // }

  // if profile pic is uploaded, define the file path
  const uploadPath = profilePic
    ? path.join("../../../ACES-uploads/profilePictures", profilePic.filename)
    : null;

  try {
    const data = req.body;

    // validate if student exists
    const [rows] = await getStudentById(data.studentId);
    const user = rows[0];

    if (user) {
      const error = new Error("Student already registered");
      error.status = 403;
      error.success = false;
      return next(error);
    }

    //generate unique id
    const userId = ulid();

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);

    //student role
    const ROLE = "1";

    const userData = {
      userId: userId,
      firstname: data.firstname,
      lastname: data.lastname,
      middlename: data.middlename,
      email: data.email,
      password: hashPassword,
      role: ROLE,
    };

    const studentData = {
      studentId: data.studentId,
      userId: userId,
      course: data.course,
      year: data.year,
      profilePicture: uploadPath,
    };

    await createUser(userData);
    await createStudent(studentData);
    res.status(201).json({ success: true, message: "User created" });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 500;
    error.success = false;
    return next(error);
  }
};
