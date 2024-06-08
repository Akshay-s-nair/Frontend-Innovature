import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Beg.css';

function Beg() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Home');
  };

  return (
    <div className="intro-container">
      <h1 className="headline">Employment Management System</h1>
      <button className="intro-button" onClick={handleButtonClick}>
        Go to Home
      </button>
    </div>
  );
}

export default Beg;
