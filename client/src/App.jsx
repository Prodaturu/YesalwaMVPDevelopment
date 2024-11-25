
// client/src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Transition from './components/Transition';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

const Home = lazy(() => import('./pages/Home.jsx'));
const Questionnaire = lazy(() => import('./pages/Questionnaire.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const Results = lazy(() => import('./pages/Results.jsx'));
const Personality = lazy(() => import('./pages/Personality.jsx'));

function App() {
  const [showTransition, setShowTransition] = useState(true); // State for transition visibleness control

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTransition(false); // Hide transition after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {showTransition ? (
            <Transition /> // Show transition only on initial page load
          ) : (
            <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/questionnaire" element={<Questionnaire />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/results" element={<Results />} />
                  <Route path="/personality" element={<Personality />} />
                </Routes>
            </>
          )}
        </Suspense>
      </Router>
    </>
  );
}

export default App;


// client/src/App.jsx
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { lazy, Suspense, useState, useEffect } from 'react';
// import Transition from './components/Transition';

// import './App.css';
// import Home from './pages/Home.jsx';
// import Questionnaire from './pages/Questionnaire.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Navbar from './components/Navbar';

// function App() {^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//   const [showTransition, setShowTransition] = useState(true); // State to control the display of the transition component

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowTransition(false); // Hide the transition after 3 seconds
//     }, 3000); // Match the duration of the transition

//     return () => clearTimeout(timer); // Cleanup the timer on component unmount
//   }, []);

//   return (
//     <>

//       <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//           {showTransition ? (
//             <Transition /> // Show the transition component if showTransition is true
//           ) : (
//             <>
//               {/* <Navbar /> */}
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/Home" element={<Home />} />
//                 <Route path="/questionnaire" element={<Questionnaire />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//               </Routes>
//             </>
//           )}
//         </Suspense>
//       </Router>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { lazy, Suspense, useState, useEffect } from 'react';

// const Home = lazy(() => import("./pages/Home.jsx"));
// const Questionnaire = lazy(() => import("./pages/Questionnaire"));
// const Dashboard = lazy(() => import("./pages/Dashboard"));

// function App() {
//   return (
//     <>
//       <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/questionnaire" element={<Questionnaire />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </Suspense>
//       </Router>
//     </>
//   )
// }

// export default App
