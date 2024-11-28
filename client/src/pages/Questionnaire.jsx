import { useState } from 'react';
import questions from '../data/questions.js'; // Your question set
import mappingTable from '../data/mappingTable.js'; // Your mapping table
import '../styles/Questionnaire.css';
import { useNavigate } from 'react-router-dom';
import ellipseImage from '../assets/ellipse.png';

const Questionnaire = () => {
  // Tracks whether the questionnaire has started
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [aspectCounts, setAspectCounts] = useState(null);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    const updatedOptions = [...selectedOptions];
    // Store selected option for the current question
    updatedOptions[currentQuestionIndex] = optionId;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateAspectCounts();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateAspectCounts = () => {
    const counts = {};

    selectedOptions.forEach((optionId) => {
      const mapping = mappingTable.find((entry) => entry.option_id === optionId);
      if (mapping) {
        counts[mapping.aspect_id] = (counts[mapping.aspect_id] || 0) + 1;
      }
    });

    setAspectCounts(counts);
  };

  // const totalAspects = mappingTable.reduce((acc, entry) => {
  //   acc[entry.aspect_id] = acc[entry.aspect_id] ? acc[entry.aspect_id] + 1 : 1;
  //   return acc;
  // }, {});

  return (
    <div className="container">
      {!hasStarted ? (
        // Introductory screen
        <div className="intro-screen">
          <h3>Please fill the questionnaire to know your personality type</h3>
          <button
            // Start questionnaire
            onClick={() => setHasStarted(true)}
            className="start-button"
          >
            Start
          </button>
        </div>
      ) : aspectCounts === null ? (
        // Questionnaire screen
        <>
          <h3 className='question-class'>{currentQuestion.question}</h3>
          {currentQuestion.options.map((o) => (
            <div
              key={o.id}
              onClick={() => handleOptionSelect(parseInt(o.id))}
              className={`option ${selectedOptions[currentQuestionIndex] === parseInt(o.id) ? 'selected' : ''
                }`}
            >
              <img src={o.image} alt={o.text} />
              <div className="option-description">
                <strong>{o.text}</strong>
                <p>{o.description}</p>
              </div>
            </div>
          ))}
          <div className="navigation-bar">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="navigation"
            >
              Previous
            </button>
            <button onClick={handleNext} className="navigation">
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      ) : (
        // Results screen
        navigate('/personality')
      )}
      <img src={ellipseImage} alt="Ellipse" className="ellipse" />
    </div>
  );
};

export default Questionnaire;
