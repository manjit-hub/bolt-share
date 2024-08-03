import axios from 'axios';
import { toast } from 'react-toastify';

const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error.response.data);
    toast.error("Error Uploading File!");
    return { success: false };
  }
};

export default uploadFile;
