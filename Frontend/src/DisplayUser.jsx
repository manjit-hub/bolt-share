import React, { useState } from 'react';
import './DisplayUser.css'
const DisplayUser = () => {
  const [userLogIn, setUserLogIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [convertedFiles, setConvertedFiles] = useState([
    { date: '2023-10-01', name: 'File 1', link: 'https://example.com/file1' },
    { date: '2023-10-02', name: 'File 2', link: 'https://example.com/file2' },
  ]);

  const handleSignUp = () => {
    setUserLogIn(true);
    setUserName('John Doe');
    setUserEmail('john.doe@example.com');
  };

  const handleLogIn = () => {
    setUserLogIn(true);
    setUserName('John Doe');
    setUserEmail('john.doe@example.com');
  };

  const handleContinueWithGoogle = () => {
    setUserLogIn(true);
    setUserName('John Doe');
    setUserEmail('john.doe@example.com');
  };

  return (
    <>
      {userLogIn ? (
        <div className='user-log-in'>
          <h2>User Details</h2>
          <p>Name: {userName}</p>
          <p>Email: {userEmail}</p>
          <h3>Recently Converted Files:</h3>
          <table>
            <thead>
              <tr>
                <th>DATE</th>
                <th>NAME</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {convertedFiles.map((file, index) => (
                <tr key={index}>
                  <td>{file.date}</td>
                  <td>{file.name}</td>
                  <td>
                    <a href={file.link} target="_blank" rel="noopener noreferrer">
                      Copy
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='login-container'>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleLogIn}>Log In</button>
          <button onClick={handleContinueWithGoogle}>Continue with Google</button>
        </div>
      )}
    </>
  );
};

export default DisplayUser;
