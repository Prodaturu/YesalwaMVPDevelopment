// client/src/components/Transition.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transition.css'; // Create this CSS file for styling
import logo from '../assets/YesalwaLogo.png';

const Transition = () => {
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setTimeout(() => {
        navigate('/home'); // Navigate to the home page after the transition
      }, 1000); // Delay navigation to allow the transition to complete
    }, 3000); // Display the logo for 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`transition-container ${showLogo ? 'show' : 'hide'}`}>
      <img src={logo} alt="Company Logo" className="logo" />
    </div>
  );
};



export default Transition;