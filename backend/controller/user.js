import { getUser, getUserById } from "../model/UserModel.js";
import {
  getStudent,
  getStudentById,
  updateStudent,
} from "../model/StudentModel.js";

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
    const [students] = await getStudentById(req.user.userId);
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
        lastname:user.lastname,
        middlename:user.middlename,
        email:user.email,
        course: student.course,
        year: student.year,
        profilePicture:student.profilePicture
     }
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
