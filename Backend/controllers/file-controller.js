import File from '../models/File.models.js';

const uploadFile = async (req, res) => {
    console.log("Uploading File!");
    // console.log(req);
    const fileObj = {
        path : req.file.path,
        name : req.file.originalname,
    }

    try{
        const file = await File.create(fileObj);
        res.status(200).json({
            path : `${process.env.BACKEND_URL}/file/${file._id}`,
        })
    } catch (error){
        res.status(500).json({
            message : "Error Uploading File",
            error: error.message
        })
    }
};

export default uploadFile;
