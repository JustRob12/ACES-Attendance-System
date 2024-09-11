import { getUser, getUserById } from "../model/UserModel.js";
import {
  getStudent,
  getStudentById,
  getStudentId,
  updateStudent,
  uploadProfilePic,
} from "../model/StudentModel.js";
import { v2 as cloudinary } from "cloudinary";

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

    const data = {
      id: user.id,
      studId: student.studId,
      firstname: user.firstname,
      lastname: user.lastname,
      middlename: user.middlename,
      email: user.email,
      course: student.course,
      year: student.year,
      profilePicture: student.profilePicture,
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
    // If the student has an existing profile picture in Cloudinary, delete it
    if (student.profilePicture) {
      const publicId = getCloudinaryPublicId(student.profilePicture);
      await cloudinary.uploader.destroy(`profilePictures/${publicId}`);
      console.log("Old profile picture deleted from Cloudinary");
    }

    //get file url
    const filePath = req.file.fileUrl;

    // Update the student's profile picture in the database with the Cloudinary URL
    await uploadProfilePic(student.studId, filePath);

    res.status(200).json({
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
// Helper function to get the public ID from a Cloudinary URL
const getCloudinaryPublicId = (url) => {
  const parts = url.split('/');
  const publicIdWithExtension = parts[parts.length - 1]; // e.g., 'profile_12345.jpg'
  const publicId = publicIdWithExtension.split('.')[0]; // Strip the extension
  return publicId;
};
