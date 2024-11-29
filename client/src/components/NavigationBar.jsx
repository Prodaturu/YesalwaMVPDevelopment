// NavigationBar.jsx
import vector11 from "../assets/vector-11.svg";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <img className="vector" alt="Vector" src={vector11} />
      {/* Additional navigation elements can be added here */}
    </div>
  );
};

export default NavigationBar;