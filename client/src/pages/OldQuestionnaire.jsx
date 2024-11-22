// import React, { useState } from 'react';
import "../styles/Questionnaire.css";
// import questions from '../data/questions';

/**
 * Questionnaire component renders a series of questions with selectable options.
 * It maintains the state of the current question index and the selected answers.
 *
 * @component
 * @example
 *	return (
 *   <Questionnaire />
 *)
 *
 * @returns {JSX.Element} The rendered Questionnaire component.
 *
 * @function
 * @name Questionnaire
 *
 * @description
 * The Questionnaire component displays a question and its options. When an option is selected,
 * it updates the answers state and moves to the next question. If all questions are answered,
 * it logs the completed answers.
 *
 * @hook
 * @name useState
 * @param {number} currentQuestionIndex - The index of the current question being displayed.
 * @param {Object} answers - An object storing the selected answers for each question.
 *
 * @param {function} handleAnswerSelect - Handles the selection of an answer option.
 * @param {number} handleAnswerSelect.questionId - The ID of the current question.
 * @param {number} handleAnswerSelect.optionId - The ID of the selected option.
 *
 * @param {Object} currentQuestion - The current question object being displayed.
 * @param {string} currentQuestion.question - The text of the current question.
 * @param {Array} currentQuestion.options - The list of options for the current question.
 * @param {number} currentQuestion.options.id - The ID of the option.
 * @param {string} currentQuestion.options.image - The image URL of the option.
 * @param {string} currentQuestion.options.text - The text of the option.
 */
// const Questionnaire = () => {
// 	// Initialize state variables
// 	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// 	const [answers, setAnswers] = useState({});

// 	// Function to handle the selection of an answer option
// 	const handleAnswerSelect = (questionId, optionId) => {
// 		const updatedAnswers = {
// 			...answers,
// 			[questionId]: optionId,
// 		};

// 		setAnswers(updatedAnswers);

// 		if (currentQuestionIndex < questions.length - 1) {
// 			setCurrentQuestionIndex(currentQuestionIndex + 1);
// 		} else {
// 			// Log updated answers after the final question
// 			console.log("Questionnaire completed", updatedAnswers);
// 		}
// 	};

// 	// Variable to store the current question object
// 	const currentQuestion = questions[currentQuestionIndex];

// 	return (
// 		<div className="questionnaire-container" id="questionnaire-main-div">
// 			<h2>{currentQuestion.question}</h2>
// 			<div className="options">
// 				{currentQuestion.options.map((option) => (
// 					<div
// 						key={option.id}
// 						className="option"
// 						onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
// 					>
// 						<img src={option.image} alt={option.text} />
// 						<p>{option.text}</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Questionnaire;

const Questionnaire = () => {
	<div className="questionnaire-container" id="questionnaire-main-div">
		<h1 fontsize="50px">Hello world</h1>
	</div>
}

export default Questionnaire;