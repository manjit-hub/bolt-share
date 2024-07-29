import express from 'express';
import uploadFile from '../controllers/file-controller.js';

const router = express.Router();

// Routes Parameter Pass: ROUTE/PATH , MIDDLEWARES, CONTROLLERS/FUNCTION
router.post('/upload', uploadFile);


export default router;