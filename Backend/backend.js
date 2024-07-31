import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// IMPORT FILE:
import { DBConnection } from './database/db.js';
import routes from './routes/routes.js';


// CONFIG
dotenv.config();
const app = express();

//CORS 
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// DB Connection
DBConnection();

app.get('/', (req,res) =>{ // First call to '/' route will be here
    res.send("Backend is running!");
})

app.use('/', routes); // Rest '/' route calls will be forwarded here: Agar '/' badd kuch hoga to 

const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})