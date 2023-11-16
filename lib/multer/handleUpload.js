const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define the directory where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original filename
  },
});
