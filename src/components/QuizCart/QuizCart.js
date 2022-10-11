import React from 'react';
import Questions from '../Questions/Questions';

const QuizCart = ({ questions }) => {


    return (
        <div>

            {questions.map(quiz => <Questions key={quiz.id} quiz={quiz}></Questions>)}


        </div>
    );
};

export default QuizCart;