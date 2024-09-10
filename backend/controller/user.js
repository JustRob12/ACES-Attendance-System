import { getUser, getUserById } from "../model/UserModel.js";
import {
  getStudent,
  getStudentById,
  getStudentId,
  updateStudent,
  uploadProfilePic,
} from "../model/StudentModel.js";
import fs from "fs";
import path from "path";

//fetch user by id
export const findUser = async (req, res, next) => {
  try {
    // console.log(req.user)

    // Find the user by id
    const [users] = await getUserById(req.user.userId);
    const user = users[0];

    if (!user) {
      const error = new Error("Student not found");
      error.status = 404;
      error.success = false;
      return next(error);
    }

    // Find the student by id
    const [students] = await getStudentId(req.user.userId);
    const student = students[0];

    if (!student) {
      const error = new Error("Student not found");
      error.status = 404;
      error.success = false;
      return next(error);
    }

    //if profile pic path exists clean up file path, else null
    const profilePictureUrl = student.profilePicture
      ? `${req.protocol}://${req.get("host")}/ACES-uploads/${path.basename(
          student.profilePicture
        )}`
      : null;

    const data = {
      id: user.id,
      studId: student.studId,
      firstname: user.firstname,
      lastname: user.lastname,
      middlename: user.middlename,
      email: user.email,
      course: student.course,
      year: student.year,
      profilePicture: profilePictureUrl,
    };
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (err) {
    //check if invalid id format
    if (err.name === "Cast Error") {
      return res.status(400).json({
        success: false,
        message: "Invalid ID format",
      });
    }

    const error = new Error(err.message);
    error.status = 500;
    error.success = false;
    return next(error);
  }
};

export const uploadProfile = async (req, res, next) => {
  const profilePic = req.file; // Access the uploaded file

  //require upload profile pic
  if (!profilePic) {
    const error = new Error("No profile picture uploaded");
    error.status = 400;
    error.success = false;
    return next(error);
  }

  //define file path
  const uploadPath = path.join("../../../ACES-uploads", profilePic.filename);

  try {
    // Find the user by id
    const [users] = await getUserById(req.user.userId);
    const user = users[0];

    if (!user) {
      const error = new Error("Student not found");
      error.status = 404;
      error.success = false;
      return next(error);
    }

    // Find the student by id
    const [students] = await getStudentId(req.user.userId);
    const student = students[0];

    if (!student) {
      const error = new Error("Student not found");
      error.status = 404;
      error.success = false;
      return next(error);
    }

    // Check if the student already has an existing profile picture
    if (student.profilePicture) {
      const basePath = path.basename(student.profilePicture);
      const oldProfilePath = path.resolve(`../../ACES-uploads/${basePath}`);
  
      // Check if the old profile picture exists and delete it
      if (fs.existsSync(oldProfilePath)) {
        fs.unlinkSync(oldProfilePath);
        console.log("Old profile picture deleted");
      }
    }

    await uploadProfilePic(student.studId, uploadPath);

    res
      .status(200)
      .json({
        success: true,
        message: "Profile picture uploaded successfully!",
      });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 500;
    error.success = false;
    return next(error);
  }
};
