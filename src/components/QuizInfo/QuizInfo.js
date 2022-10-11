import React from 'react';
import QuizCart from '../QuizCart/QuizCart';

const QuizInfo = ({ quizIntro }) => {
    const { name, total, logo, questions } = quizIntro;

    return (
        <div>
            <section className="pt-0 pb-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className=" flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={logo} />
                            <p className="text-xl font-semibold leading-tight">Quizzes On {name}</p>
                            <p className="dark:text-gray-400">Total Quizzes: {total}</p>
                        </div>
                    </div>
                </div>
            </section>
            <QuizCart questions={questions}></QuizCart>
        </div>
    );
};

export default QuizInfo;