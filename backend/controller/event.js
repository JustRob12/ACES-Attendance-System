import { getUser, getUserById } from "../model/UserModel.js";
import { getEvent, getEventById } from "../model/EventModel.js";
import path from "path";

//fetch event by id
export const findEvent = async (req, res, next) => {
  try {
    // Find the event by id
    const [events] = await getEventById(req.params.id);
    const event = events[0];
   
    if (!event) {
      const error = new Error("Event not found");
      error.status = 404;
      error.success = false;
      return next(error);
    }
    res.status(200).json({
      success: true,
      data: event,
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

export const getEvents = async (req, res, next) => {
  try {
    const [events] = await getEvent();

    if (events.length <= 0) {
      const error = new Error("No events found");
      error.status = 200;
      error.success = true;
      return next(error);
    }
    res.status(200).json({
      success: true,
      data: events,
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
