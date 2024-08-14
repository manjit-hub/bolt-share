import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faSpinner } from '@fortawesome/free-solid-svg-icons';
import uploadFile from './middlewares/uploadFile';
import './DisplayUpload.css';

const DisplayUpload = ({ theme }) => {
  const [converted, setConverted] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('Text to copy');
  const [loading, setLoading] = useState(false);
  const textRef = useRef(null);
  const fileInputRef = useRef(null);

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    navigator.clipboard.writeText(copyText).then(() => {
      toast.success("Copied to Clipboard");
    }, (err) => {
      toast.error("Failed to copy to Clipboard");
    });
  };

  const handleConvert = async () => {
    if (!file) {
      toast.error("Please select a file");
    } else if((file.size / 1024 / 1024).toFixed(2) >= 10){
      toast.error("File size exceeding 10MB");
    }else {
      setLoading(true);
      try {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
  
        console.log("FormData:", data);  // Log the FormData object
  
        const response = await uploadFile(data);
        console.log(response);  // Add this line to check the response in the console
        const { success, path } = response;
        if (success) {
          setConverted(true);
          setUrl(path);
          if (textRef.current) {
            textRef.current.value = path;
          }
        } else {
          toast.error("Failed to convert");
        }
      } catch (error) {
        console.error("Error during conversion:", error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  

  const handleCancel = () => {
    setConverted(false);
    setUrl("Text to copy");
    setFile(null);
    if (textRef.current) {
      textRef.current.value = "Text to copy";
    }
  };

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log("Selected File:", selectedFile);  // Log the selected file
  };

  return (
    <div className={`outer ${theme}`}>
      <div className='display-upload'>
        <h2>⚡BOLT SHARING⚡</h2>
        <p>Share Images & Documents up to 10MB</p>
        <input className="inputFile" type="file" ref={fileInputRef} onChange={handleInputChange} />
        <button className='upload' onClick={handleUpload}>
          <FontAwesomeIcon icon={faFile} style={{ color: "#adff2f", marginRight: "5px", height: "23px" }} />
          UPLOAD
        </button>

        {file && (
          <div className="file-details">
            <p><strong>File Name:</strong> {file.name}</p>
            <p><strong>File Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <p><strong>File Type:</strong> {file.type}</p>
          </div>
        )}

        {converted ? (
          <div className="converted">
            <input className='outputURL'
              value={url}
              disabled
              type="text"
              ref={textRef}
            />
            <div className="btnConverted">
            <button onClick={copyToClipboard}>Copy</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="notConverted">
            <button onClick={handleConvert} disabled={loading}>
              {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Convert'}
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayUpload;
