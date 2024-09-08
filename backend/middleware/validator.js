import { body, validationResult } from "express-validator";

//define validation rules for creating a new user
export const userValidationRules = () => [
  body("username").notEmpty().withMessage("Username is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
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
