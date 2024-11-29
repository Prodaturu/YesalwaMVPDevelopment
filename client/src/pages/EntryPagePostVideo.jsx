import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import NavigationBar from "../components/NavigationBar.jsx";
import ellipse2 from "../assets/ellipse-2.svg";
import whiteEllipse from "../assets/white-ellipse.svg";
import "../styles/EntryPagePostVideo.css";

const EntryPagePostVideo = () => {
  const [transitioning, setTransitioning] = useState(false);
  const [showSvg, setShowSvg] = useState(false); // Controls the white ellipse visibility
  const [showTextBoxes, setShowTextBoxes] = useState(false); // Controls text boxes visibility
  const [showSecondTextBox, setShowSecondTextBox] = useState(false); // Controls the second text box
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleEllipseClick = () => {
    if (!transitioning) {
      // First click to start transition
      setTransitioning(true);
      setTimeout(() => {
        setShowSvg(true); // Show white ellipse after the transition
      }, 1500);
    } else if (showSvg) {
      // Show text boxes overlay if the white ellipse is visible
      setShowTextBoxes(true);
    }
  };

  const handleTextBoxClick = () => {
    if (!showSecondTextBox) {
      setShowSecondTextBox(true); // Show the second text box on first click
    } else {
      navigate("/questionnaire"); // Navigate to the questionnaire page on second click
    }
  };

  return (
    <div className={`entry-page-post ${transitioning ? "transitioning" : ""}`}>
      {/* First Background (Initially visible) */}
      <div className={`background bg1 ${transitioning ? "move-left" : ""}`}></div>

      {/* Second Background (Initially off-screen to the right) */}
      <div className={`background bg2 ${transitioning ? "move-left" : ""}`}></div>
      <NavigationBar />

      <div className="image-div">
        <img
          className={`ellipse ${transitioning ? "ellipse-transition" : ""}`}
          alt="Ellipse"
          src={ellipse2}
          onClick={handleEllipseClick}
        />
      </div>

      {/* White Ellipse Inside Original Ellipse */}
      {showSvg && showTextBoxes && (
        <img
          className="white-ellipse"
          src={whiteEllipse}
          alt="White Ellipse"
        />
      )}

      {/* Text Box Div */}
      {showSvg && showTextBoxes && !showSecondTextBox && (
        <div className="text-boxes-div" onClick={handleTextBoxClick}>
          <h1>What is your Personality?</h1>
          <p>Click to find out!</p>
        </div>
      )}

      {/* Change Text Boxes on Click */}
      {showTextBoxes && showSecondTextBox && (
        <div className="text-boxes-div" onClick={handleTextBoxClick}>
          <p>Click on the Facial features which resemble you the most</p>
        </div>
      )}
    </div>
  );
};

export default EntryPagePostVideo;
