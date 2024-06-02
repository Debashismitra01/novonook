const uploadFile = (req, res) => {
    if (!req.file) {
        const imagePath = path.join(__dirname, 'C:uploads/aboutpic.jpg');
        res.status(200).sendFile(imagePath)
    }
    res.status(200).send({ message: 'File uploaded successfully' });
};

module.exports = { uploadFile };
