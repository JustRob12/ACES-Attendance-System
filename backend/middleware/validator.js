import { body, validationResult } from "express-validator";

//define validation rules for creating a new user
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
