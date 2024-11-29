import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import AppLogoOpeningPage from "./components/AppLogoOpeningPage.jsx";
import useTransition from "./hooks/useTransition.js"; // Custom hook
import { Home, Questionnaire, Product, Results, Personality, LoginPage } from "./components/LazyComponents.jsx";
import "./styles/component-styles/loader.css";

const App = () => {
  const { showTransition, animateDimming } = useTransition(1000, 3000); // Custom timings

  return (
    <Router>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        {showTransition ? (
          <AppLogoOpeningPage animateDimming={animateDimming} />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/product" element={<Product />} />
            <Route path="/results" element={<Results />} />
            <Route path="/personality" element={<Personality />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        )}
      </Suspense>
    </Router>
  );
}

export default App;