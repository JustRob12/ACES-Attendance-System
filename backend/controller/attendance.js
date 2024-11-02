import {
  createAttendance,
  getAttendance,
  findAttendance,
  attendanceCheckout,
} from "../model/AttendanceModel";
import { getEventById } from "../model/EventModel";
import { getStudentById } from "../model/StudentModel";

export const markAttendance = async (req, res, next) => {
  const { eventId, studentId } = req.body;
  try {
    const event = await getEventById(eventId);

    if (!event.active) {
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

    const isCheckOut = await findAttendance(studentId, eventId);
    // console.log({
    //   currentData: {eventId, student: student.id},
    //   ifExists: isCheckOut
    // })

    if (isCheckOut) {
      checkOut(student.id, eventId);
    } else {
      await createAttendance({
        event: eventId,
        student: student.id,
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
    const attendance = await attendanceCheckout({
      checkOut: Date.now(),
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
