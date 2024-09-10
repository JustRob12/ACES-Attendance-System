import multer from 'multer';
import path from 'path';
import cloudinary from "./cloudinaryConfig.js";
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profilePictures', // Folder name on Cloudinary where images will be stored
    public_id: (req, file) => `${Date.now()}_${path.parse(file.originalname).name}`, // Define the file name
  },
});

// Create multer instance with the storage configuration
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5 MB
  fileFilter: (req, file, cb) => {
    // Accept only certain file types
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Images Only!');
  }
});

export default upload;
