import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// IMPORT FILE:
import { DBConnection } from './database/db.js';
import routes from './routes/routes.js';

// CONFIG
dotenv.config();
const app = express();

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// CORS 
const corsOptions = {
    origin: ['https://bolt-share.vercel.app', 'http://localhost:5173'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable preflight for all routes

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Connection
DBConnection();

app.get('/', (req, res) => { // First call to '/' route will be here
    res.send("Backend is running!");
});

app.use('/', routes); // Rest '/' route calls will be forwarded here: Agar '/' badd kuch hoga to routes me redirect hoga

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
