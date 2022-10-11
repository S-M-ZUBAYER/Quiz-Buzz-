import React from 'react';
import Options from '../Options/Options';

const Questions = ({ quiz }) => {
    const { id, correctAnswer, question, options } = quiz;
    console.log(id, correctAnswer)

    return (
        <div className=" ml-9">
            <div className="flex flex-col items-start justify-center">
                <div className="flex space-x-5">
                    <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                </div>
            </div>
            <h1 className="text-lg font-semibold"><span className="text-lg text-rose-400 underline font-bold">Question:</span> {question.substring(3, question.length - 4)}</h1>

            {options.map(option => <Options option={option}></Options>)}

        </div>
    );
};

export default Questions;