import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import AppLogoOpeningPage from './components/AppLogoOpeningPage.jsx';
import './fonts.css';

// import Navbar from './components/Navbar';

// const Home = lazy(() => import('./pages/Home.jsx'));
const Home = lazy(() => import('./pages/EntryPagePostVideo.jsx'));
const Questionnaire = lazy(() => import('./pages/Questionnaire.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const Results = lazy(() => import('./pages/Results.jsx'));
const Personality = lazy(() => import('./pages/Personality.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage.jsx'));

function App() {
  const [showTransition, setShowTransition] = useState(true);
  const [animateDimming, setAnimateDimming] = useState(false);

  useEffect(() => {
    // Show logo for 1 second, then start dimming animation
    const showTimer = setTimeout(() => setAnimateDimming(true), 1000);

    // After dimming (2 seconds), hide the transition page
    const dimTimer = setTimeout(() => setShowTransition(false), 3000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(dimTimer);
    };
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {showTransition ? (
          <AppLogoOpeningPage animateDimming={animateDimming} />
        ) : (
          <>
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/questionnaire" element={<Questionnaire />} />
              <Route path="/product" element={<Product />} />
              <Route path="/results" element={<Results />} />
              <Route path="/personality" element={<Personality />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
