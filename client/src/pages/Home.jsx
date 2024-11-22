// client/src/pages/Home.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css'; // Create this CSS file for styling
// import logo from '../assets/YesalwaLogo.svg'; // Import the image

const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
      }, 3000); // Change image after 3 seconds
    }
  }, [firstLoad]);

  return (
    <div className={`home-container ${firstLoad ? 'initial' : 'final'}`}>
      <h1 className="gradient-text centered-text">
        Welcome to Yesalwa
      </h1>
    </div>
  );
};

export default Home;
