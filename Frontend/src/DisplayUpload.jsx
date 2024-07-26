import React, { useState, useRef } from 'react'; //useRef is used for 'HOOK'.
import { toast } from 'react-toastify'; // Make sure to install and import react-toastify for toast notifications
import './DisplayUpload.css';


const DisplayUpload = () => {
  const [converted, setConverted] = useState(false);
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
    try{
      const data = await axios.post(`${process.env.REACT_APP_API_URL}/convert`);
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
  };

  const handleCancel = () => {
    setConverted(false);
    textRef.current.value = "Text to copy";
  };

  const handleUpload = () =>{
    fileInputRef.current.click();
  };

  return (
    <div className='display-upload'>
      <h1>⚡BOLT SHARING⚡</h1>
      <p>Share Images & Documents upto 10MB</p>
      <input className="inputFile" type="file" ref={fileInputRef} />
      <button className='upload' onClick={handleUpload}>
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
