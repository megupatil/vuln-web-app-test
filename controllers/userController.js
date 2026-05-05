const userService = require('../services/userService');
const upload = require('../utils/fileUpload');

exports.getUser = (req, res) => {
    const name = req.query.name;
    const result = userService.getUser(name);
    res.send(result);
};

// No validation ❌
exports.uploadFile = [
    upload.single('file'),
    (req, res) => {
        res.send("File uploaded");
    }
];
