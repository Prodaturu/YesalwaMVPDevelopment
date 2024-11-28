import PropTypes from 'prop-types';
import "../styles/AppLogoOpeningPage.css";
import yesalwaLogo from "../assets/yesalwa-logo.svg";
import yesalwaTagline from "../assets/yesalwa-tagline.png";
import yesalwaText from "../assets/yesalwa-text.svg";

const AppLogoOpeningPage = ({ animateDimming }) => {
  return (
    <div className={`app-logo-opening ${animateDimming ? 'dim' : ''}`}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="yesalwa-text" alt="Yesalwa text" src={yesalwaText} />
          <img className="yesalwa-logo" alt="Yesalwa logo" src={yesalwaLogo} />
          <img
            className="yesalwa-tagline"
            alt="Yesalwa tagline"
            src={yesalwaTagline}
          />
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
AppLogoOpeningPage.propTypes = {
  // Ensure `animateDimming` as a required boolean
  animateDimming: PropTypes.bool.isRequired,
};

export default AppLogoOpeningPage;
