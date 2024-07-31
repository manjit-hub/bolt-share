import express from 'express';
import uploadFile from '../controllers/file-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

// Routes Parameter Pass: ROUTE/PATH , MIDDLEWARES, CONTROLLERS/FUNCTION
router.post('/upload', upload.single('file'), uploadFile);


export default router;