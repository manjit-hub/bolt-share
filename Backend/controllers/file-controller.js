import File from '../models/File.models.js';

const uploadFile = async (req, res) => {
    console.log("Uploading File!");

    if (!req.file || !req.file.originalname) {
        console.error("Invalid file data:", req.file);
        return res.status(400).json({
            message: "Invalid file data",
        });
    }
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    };
    console.log("File Object:", fileObj);  // Log the file object to ensure it's correct

    try {
        const file = await File.create(fileObj);
        console.log(`${process.env.BACKEND_URL}/file/${file._id}`);
        res.status(200).json({
            path: `${process.env.BACKEND_URL}/file/${file._id}`,
            success: true,
        });
    } catch (error) {
        console.error("Error while uploading file:", error.message);
        res.status(500).json({
            message: "Error Uploading File!",
            error: error.message,
        });
    }
};

const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        if (!file) {
            return res.status(404).json({
                message: "File not found",
            });
        }
        file.downloadCount++;
        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error("Error while downloading file:", error.message);
        res.status(500).json({
            message: "Error Downloading File",
            error: error.message,
        });
    }
};

export { uploadFile, getFile };
