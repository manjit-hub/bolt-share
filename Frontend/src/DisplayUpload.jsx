import React, { useState, useRef, useEffect } from 'react'; //useRef is used for 'HOOK'.
import { toast } from 'react-toastify';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

//IMPORT FILES:
import './DisplayUpload.css';
import uploadFile from './middlewares/uploadFile';

//CONFIG: 

const DisplayUpload = () => {
  const [converted, setConverted] = useState(false);
  const [file, setFile] = useState('');
  const textRef = useRef(null);
  const fileInputRef = useRef(null);
  
  useEffect(() => {
    const getImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name", file.name); // Store in it's respective format
        data.append("file", file); // Store in Binary Format

        const response = await uploadFile(data);
        // console.log("USE EFFECT");
        // console.log(response);
      }
    }
    getImage();
  },[file]); // It will re-render when there will be changes in 'file'

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    navigator.clipboard.writeText(copyText).then(() => {
      toast.success("Copied to Clipboard");
    }, (err) => {
      toast.error("Failed to copy to Clipboard");
    });
  };

  const handleConvert = async () => {
    if(!file){
      console.log("Please select a file");
      toast.error("Please select a file");
    } 
    else{
      try{
        const data = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/convert`);
        const {success , URL} = data;
        if(success){
          setConverted(true);
          textRef.current.value = URL;
        }
        else{
          toast.error("Failed to convert");
        }
      } catch(error){
        console.error(error);
      }
    }
  };

  const handleCancel = () => {
    setConverted(false);
    textRef.current.value = "Text to copy";
  };

  const handleUpload = () =>{
    fileInputRef.current.click();
  };

  const handleInputChange = (e) =>{
    setFile(e.target.files[0]);
  }
  return (
    <div className='display-upload'>
      <h1>⚡BOLT SHARING⚡</h1>
      <p>Share Images & Documents upto 10MB</p>
      <input className="inputFile" type="file" ref={fileInputRef}  onChange={handleInputChange}/>
      <button className='upload' onClick={handleUpload}>
      <FontAwesomeIcon icon={faFile} style={{color: "#adff2f", marginRight:"5px", height:"23px"}} />
      UPLOAD
      </button>
      {converted ? (
        <div className="converted">
          <input
            value="Text to copy"
            disabled
            type="text"
            ref={textRef}
          />
          <button onClick={copyToClipboard}>Copy</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="notConverted">
          <button onClick={handleConvert}>Convert</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DisplayUpload;
