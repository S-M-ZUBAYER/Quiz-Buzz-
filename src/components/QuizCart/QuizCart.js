import React from 'react';
import Questions from '../Questions/Questions';

const QuizCart = ({ questions, logo }) => {


    return (
        <div className="md:w-full">

            {questions.map(quiz => <Questions key={quiz.id} logo={logo} quiz={quiz}></Questions>)}


        </div>
    );
};

export default QuizCart;