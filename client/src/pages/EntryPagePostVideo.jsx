import ellipse2 from "../assets/ellipse-2.svg";
import "../styles/EntryPagePostVideo.css";
import vector11 from "../assets/vector-11.svg";

const EntryPagePostVideo = () => {
  return (
    <div className="entry-page-post">
      <div className="image-div">
        <img className="ellipse" alt="Ellipse" src={ellipse2} />

        <img className="vector" alt="Vector" src={vector11} />
      </div>
    </div>
  );
};

export default EntryPagePostVideo;