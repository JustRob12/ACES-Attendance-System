import express from "express";
import user from "./routes/user.js";
import event from "./routes/event.js";
import auth from "./routes/auth.js";
import errorHandler from "./middleware/error.js";
import cors from "cors";

const port = process.env.PORT || 8080;
const app = express();

//enable cors for all origins
app.use(cors());
//auth routes
app.use("/api/", auth)
//user routes
app.use("/api/", user);
//event routes
app.use("/api/",event)
// Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

//implement error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
