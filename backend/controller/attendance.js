import {
  createAttendance,
  getAttendance,
  findAttendance,
  attendanceCheckout,
} from "../model/AttendanceModel.js";
import { getEventById } from "../model/EventModel.js";
import { getStudentById } from "../model/StudentModel.js";
import { ulid } from "ulidx";

export const markAttendance = async (req, res, next) => {
  const { eventId, studentId } = req.body;
  try {
    const [event] = await getEventById(eventId);

    if (event[0].status !== "1") {
      return res.status(403).json({
        success: false,
        message: "Event does not accept attendance at the moment",
      });
    }

    const student = await getStudentById(studentId);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const [isCheckOut] = await findAttendance(studentId, eventId);

    if (isCheckOut.length > 0) {
      checkOut(studentId, eventId);
    } else {
      await createAttendance({
        event: eventId,
        student: studentId,
      });
    }
    res.status(201).json({
      success: true,
      message: "Attendance recorded",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const checkOut = async (student, event) => {
  try {
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); //local timestamp
  
    const attendance = await attendanceCheckout({
      checkOut: date,
      student,
      event,
    });
   
    if (attendance) {
      return true;
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
