import express from 'express';
import { uploadFile, getFile }  from '../controllers/file-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

// Routes Parameter Pass: ROUTE/PATH , MIDDLEWARES, CONTROLLERS/FUNCTION

// UPLOAD FILE
router.post('/upload', upload.single('file'), uploadFile);

// DOWNLOAD FILE
router.get('/file/:fileId', getFile);

// TEST UPLOAD
router.post('/test-upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully');
});
export default router;