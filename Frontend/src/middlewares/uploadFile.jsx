import axios from 'axios';
import { toast } from 'react-toastify';

const fileUpload = async (data) =>{
    try{
        console.log("Entered Upload");
        // console.log(import.meta.env.VITE_BACKEND_URL);
        const response = axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, data);
        return response.data;

    } catch(error){
        console.error("Error Uploading File!",error.message);
        toast.error("Error Uploading File!");
    }
}

export default fileUpload;