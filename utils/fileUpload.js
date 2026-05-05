const multer = require('multer');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Vulnerability: no sanitization
    }
});

module.exports = multer({ storage: storage });
