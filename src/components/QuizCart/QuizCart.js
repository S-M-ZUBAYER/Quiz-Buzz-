import React from 'react';

const QuizCart = ({ questions }) => {
    const { correctAnswe, id, options, question } = questions[0];
    console.log(question)
    return (
        <div>
            <h1>{question}</h1>
        </div>
    );
};

export default QuizCart;