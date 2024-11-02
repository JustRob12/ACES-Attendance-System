import {
  getEvent,
  getEventById,
  createEvent,
  updateEvent,
} from "../model/EventModel.js";
import { ulid } from "ulidx";

export const insertEvent = async (req, res, next) => {
  try {
    const data = req.body;
    const eventId = ulid(); //generate unique id
    const status = "0";

    const eventData = {
      id: eventId,
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      status: status,
    };
    await createEvent(eventData);

    res.status(201).json({ success: true, message: "Event created" });
  } catch (err) {
    const error = new Error(err.message);
    error.status = 500;
    error.success = false;
    return next(error);
  }
};

export const modifyEvent = async (req, res, next) => {
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

    // Use existing values if the new data is an empty string or null
    const eventData = {
      name: data.name || user.name, // If data.name is empty or null, fallback to user.firstname
      description: data.description || user.description,
      startDate: data.startDate || user.startDate,
      endDate: data.endDate || user.endDate,
      checkIn: data.checkIn || user.checkIn,
      checkOut: data.checkOut || user.checkOut,
      status: data.status || user.status,
    };

    await updateEvent(req.params.id, eventData);

    res.status(200).json({
      success: true,
      message: "Event updated",
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

export const uploadBanner = async (req, res, next) => {

}
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
