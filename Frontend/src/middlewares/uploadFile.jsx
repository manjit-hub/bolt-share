import axios from 'axios';
import { toast } from 'react-toastify';

const uploadFile = async (data) => {
  try {
    console.log("Entered Upload");
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.error("Error Uploading File!", error.message);
    toast.error("Error Uploading File!");
    return { success: false };  // Return a default object in case of an error
  }
};

export default uploadFile;
