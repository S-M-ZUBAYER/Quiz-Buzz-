import React from 'react';
import Questions from '../Questions/Questions';

const QuizCart = ({ questions, logo, handlerCurrentResult }) => {


    return (
        <div className="md:w-full lg:mt-[-50px] sm:mt-[-30px]">

            {questions.map(quiz => <Questions handlerCurrentResult={handlerCurrentResult} key={quiz.id} logo={logo} quiz={quiz}></Questions>)}


        </div>
    );
};

export default QuizCart;