import React, { useEffect, useState } from 'react';
import DisplayUpload from './DisplayUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function createSnowflakes() {
  const snowflakeCount = 50;
  const container = document.createElement('div');
  container.className = 'snowflakes-container';
  document.body.appendChild(container);

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(snowflake);
  }
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    createSnowflakes();
    return () => {
      const container = document.querySelector('.snowflakes-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  const handleSnowflakeClick = (e) => {
    const snowflake = e.target;
    if (snowflake.classList.contains('snowflake')) {
      snowflake.classList.add('blast');
      setTimeout(() => {
        snowflake.remove();
        createBlastAnimation();
      }, 500);
    }
  };

  const createBlastAnimation = () => {
    const blast = document.createElement('div');
    blast.className = 'blast-animation';
    document.body.appendChild(blast);
    setTimeout(() => {
      blast.remove();
    }, 1000);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app-container" onClick={handleSnowflakeClick}>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
      </button>
      <DisplayUpload theme={theme} />
      <div className="footer">
        <hr />
        <div className="footer-content">
          <p>
            Created By: <a href="https://linkedin.com/in/manjit-majhi">Manjit Majhi</a>
          </p>
          <p>Thank You 🤗</p>
          <a href="https://github.com/manjit-hub/bolt-share.git">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;




/*import React, { useState, useRef, useEffect } from 'react';
import DisplayUpload from './DisplayUpload';
import DisplayUser from './DisplayUser'
import { toast } from 'react-toastify'; 
import axios from 'axios';

// IMPORT FILES:
import './App.css';

// CONFIG

function App() {
  const [leftWidth, setLeftWidth] = useState(40); // Initial width of left-side as 40%
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const containerWidth = containerRef.current.offsetWidth;
      const newLeftWidth = (e.clientX / containerWidth) * 100;
      if (newLeftWidth > 5 && newLeftWidth < 95) { // Prevent extremes
        setLeftWidth(newLeftWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="app-container" ref={containerRef}>
      <div className="split-screen">
        <div className="left-side" style={{ width: `calc(${leftWidth}% - 3px)` }}>
          <DisplayUser/>
        </div>
        <div 
          className="divider" 
          onMouseDown={handleMouseDown} 
          style={{ left: `${leftWidth}%` }} 
        ></div>
        <div className="right-side" style={{ width: `calc(${100 - leftWidth}% - 3px)` }}>
          <DisplayUpload/>
        </div>
      </div>
      <div className="footer">
        <hr />
        <div className="footer-content">
          <p>
          Created By: 
          <a href="https://linkedin.com/in/manjit-majhi">Manjit Majhi</a>
          </p>
          <p>Thank You 🤗</p>
          <a href="https://github.com/manjit-hub/bolt-share.git">Github</a>
        </div>
      </div>
    </div>
  );
}

export default App;
*/
