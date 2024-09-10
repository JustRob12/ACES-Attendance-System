// Middleware to extract Cloudinary public ID from a URL and attach it to the request object
const extractCloudinaryPublicId = (req, res, next) => {
  const { cloudinaryUrl } = req.body; // Assuming the Cloudinary URL is in the request body

  if (!cloudinaryUrl) {
    return res.status(400).json({
      success: false,
      message: "Cloudinary URL is required",
    });
  }

  // Split the URL to extract the public ID
  const parts = cloudinaryUrl.split('/');
  const publicIdWithExtension = parts[parts.length - 1]; // e.g., 'profile_12345.jpg'
  const publicId = publicIdWithExtension.split('.')[0]; // Strip the extension

  // Attach the publicId to the request object so it can be used in other middlewares or controllers
  req.cloudinaryPublicId = publicId;

  // Call the next middleware or route handler
  next();
};

export default extractCloudinaryPublicId;
