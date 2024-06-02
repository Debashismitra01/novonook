const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../controller/uploadcontroller');

const uploadrouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Destination directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use original file name
    }
});

const upload = multer({ storage: storage });

// Define the route to handle file upload
uploadrouter.post('/', upload.single('file'), uploadFile);

module.exports = uploadrouter;
