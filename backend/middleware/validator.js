import { body, validationResult } from "express-validator";

//define validation rules for creating a new user
export const userValidationRules = () =>[
  body("firstname").notEmpty().withMessage("Firstname is required"),
  body("lastname").notEmpty().withMessage("Lastname is required"),
  body("email").notEmpty().withMessage("Email is required"),
  body("course").notEmpty().withMessage("course is required"),
  body("year").notEmpty().withMessage("year is required"),
  body("studentId").notEmpty().withMessage("studentId is required")
];

export const loginValidationRules = () => [
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];



// Middleware to handle validation errors
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((error) => error.msg),
    });
  }
  next();
};
