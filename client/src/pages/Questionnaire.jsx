import { useState } from 'react';
import questions from '../data/questions.js'; // Your question set
import mappingTable from '../data/mappingTable.js'; // Your mapping table
import { useNavigate } from 'react-router-dom';
import '../styles/Questionnaire.css';
import ellipseImage from '../assets/ellipse.png';

const Questionnaire = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [aspectCounts, setAspectCounts] = useState({});
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    const updatedOptions = [...selectedOptions];
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
    const aspectQuestions = {}; // To track unique questions for each aspect

    selectedOptions.forEach((optionId) => {
      const mapping = mappingTable.find((entry) => entry.option_id === optionId);
      if (mapping) {
        const aspectId = mapping.aspect_id;

        // Update the count of selections for each aspect
        counts[aspectId] = (counts[aspectId] || 0) + 1;

        // Track unique questions for each aspect
        if (!aspectQuestions[aspectId]) {
          aspectQuestions[aspectId] = new Set();
        }
        aspectQuestions[aspectId].add(mapping.question_id); // Assuming each mapping has a `question_id`
      }
    });

    // Calculate aspect ratio (selected count / unique question count)
    const aspectRatios = {};
    Object.keys(counts).forEach((aspectId) => {
      const selectedTimes = counts[aspectId];
      const uniqueQuestionsCount = aspectQuestions[aspectId].size;
      aspectRatios[aspectId] = selectedTimes / uniqueQuestionsCount;
    });

    setAspectCounts(aspectRatios);
    setIsComplete(true);
  };

  const handleProceedToResults = () => {
    navigate('/results', {
      state: { aspectCounts }
    });
  };

  return (
    <div className="container">
      {!hasStarted ? (
        <div className="intro-screen">
          <h3>Please fill the questionnaire to know your personality type</h3>
          <button onClick={() => setHasStarted(true)} className="start-button">Start</button>
        </div>
      ) : isComplete ? (
        <div className="summary-screen">
          <h3>Questionnaire Complete!</h3>
          <button onClick={handleProceedToResults} className="proceed-button">
            Proceed to Results
          </button>
        </div>
      ) : (
        <>
          <h3 className='question-class'>{currentQuestion.question}</h3>
          {currentQuestion.options.map((o) => (
            <div
              key={o.id}
              onClick={() => handleOptionSelect(parseInt(o.id))}
              className={`option ${selectedOptions[currentQuestionIndex] === parseInt(o.id) ? 'selected' : ''}`}
            >
              <img src={o.image} alt={o.text} />
              <div className="option-description">
                <strong>{o.text}</strong>
                <p>{o.description}</p>
              </div>
            </div>
          ))}
          <div className="navigation-bar">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="navigation">Previous</button>
            <button onClick={handleNext} className="navigation">
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </>
      )}
      <img src={ellipseImage} alt="Ellipse" className="ellipse" />
    </div>
  );
};

export default Questionnaire;
