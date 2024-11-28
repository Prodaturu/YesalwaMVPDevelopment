import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Home.css';

const Home = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [text, setText] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const fullText = "Welcome to Yesalwa"; // Text to animate
  const typingSpeed = 110; // Speed of typing effect (ms)

  useEffect(() => {
    // Transition background after 3 seconds
    if (firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
      }, 3000);
    }
  }, [firstLoad]);

  useEffect(() => {
    // Typing effect for the text
    let timeout;
    if (text.length < fullText.length) {
      timeout = setTimeout(() => {
        setText((prev) => fullText.slice(0, prev.length + 1));
      }, typingSpeed);
    } else {
      // Navigate to questionnaire page after the animation finishes
      setTimeout(() => {
        navigate('/questionnaire'); // Navigate to /questionnaire
      }, 10000); // 1 second delay after text finishes typing
    }
    return () => clearTimeout(timeout);
  }, [text, fullText, navigate]);

  return (
    <div className={`home-container ${firstLoad ? 'initial' : 'final'}`}>
      <h1 className="spreading-rainbow-text centered-text">
        <span>{text}</span>
      </h1>
    </div>
  );
};

export default Home;
