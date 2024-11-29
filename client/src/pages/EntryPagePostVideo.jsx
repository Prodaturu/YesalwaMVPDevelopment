import { useState } from "react";
import NavigationBar from "../components/NavigationBar.jsx";
import ellipse2 from "../assets/ellipse-2.svg";
import "../styles/EntryPagePostVideo.css";

const EntryPagePostVideo = () => {
  const [transitioning, setTransitioning] = useState(false);

  const handleEllipseClick = () => {
    setTransitioning(true);
  };

  return (
    <div className={`entry-page-post ${transitioning ? 'transitioning' : ''}`}>
      {/* First Background (Initially visible) */}
      <div className={`background bg1 ${transitioning ? 'move-left' : ''}`}></div>

      {/* Second Background (Initially off-screen to the right) */}
      <div className={`background bg2 ${transitioning ? 'move-left' : ''}`}></div>

      <div className="image-div">
        <img
          className={`ellipse ${transitioning ? 'ellipse-transition' : ''}`}
          alt="Ellipse"
          src={ellipse2}
          onClick={handleEllipseClick}
        />
      </div>

      <NavigationBar />
    </div>
  );
};

export default EntryPagePostVideo;
