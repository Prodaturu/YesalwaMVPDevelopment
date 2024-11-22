import { useState } from 'react';
import { Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import '../styles/Questionnaire.css';
import questionsData from '../data/questions';

function Questionnaire({ questions = questionsData }) {
  const navigate = useNavigate(); // Hook for navigation
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(() =>
    questions.map(() => []) // Initialize an empty array for each question
  );

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleFinish = () => {
    // Dynamically calculate the count of each id's selections
    const idCounts = {};

    selectedOptions.forEach((questionSelections, questionIndex) => {
      questionSelections.forEach((optionIndex) => {
        const selectedOption = questions[questionIndex].options[optionIndex];
        if (selectedOption && selectedOption.id) {
          idCounts[selectedOption.id] = (idCounts[selectedOption.id] || 0) + 1;
        }
      });
    });

    // Filter out options with less than 3 selections and calculate percentages
    const totalSelections = Object.values(idCounts).reduce((sum, count) => sum + count, 0);
    const filteredCounts = Object.entries(idCounts).filter(([id, count]) => count >= 3);

    const percentages = filteredCounts.map(([id, count]) => ({
      id,
      percentage: ((count / totalSelections) * 100).toFixed(2), // Calculate percentage
    }));

    // Pass the percentages to the results page
    navigate('/results', { state: { percentages } });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const toggleOption = (optionIndex) => {
    setSelectedOptions((prevSelections) => {
      const newSelections = [...prevSelections];
      const currentSelections = newSelections[currentIndex];

      if (currentSelections.includes(optionIndex)) {
        // If already selected, remove it
        newSelections[currentIndex] = currentSelections.filter((i) => i !== optionIndex);
      } else {
        // Otherwise, add it
        newSelections[currentIndex] = [...currentSelections, optionIndex];
      }

      return newSelections;
    });
  };

  const currentQuestion = questions[currentIndex];
  const isNextDisabled = selectedOptions[currentIndex].length === 0; // Check if no options selected

  return (
    <main className="questionnaire-main-div">
      <section>
        <h2>{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <div
              key={option.id}
              className={`option ${selectedOptions[currentIndex].includes(index) ? 'selected' : ''}`}
              onClick={() => toggleOption(index)}
            >
              <Image
                src={option.image}
                alt={option.text}
                className={`optionImage ${selectedOptions[currentIndex].includes(index) ? 'selectedImage' : ''}`}
              />
              <p>{option.text}</p>
            </div>
          ))}
        </div>
      </section>
      <nav className="navigation-buttons">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>

        {/* Conditionally render "Next" or "Finish" button based on current question index */}
        {currentIndex < questions.length - 1 ? (
          <button onClick={handleNext} disabled={isNextDisabled}>
            Next
          </button>
        ) : (
          <button onClick={handleFinish} disabled={isNextDisabled}>
            Finish
          </button>
        )}
      </nav>
    </main>
  );
}

export default Questionnaire;
