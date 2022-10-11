import React from 'react';
import Options from '../Options/Options';

const Questions = ({ quiz, logo }) => {
    const { id, correctAnswer, question, options } = quiz;

    return (
        <div className=" mx-[10%]">
            <div className="flex justify-start gap-5 items-center mb-3 mt-10">
                <div className="flex flex-col items-start justify-center">
                    <div className="flex space-x-5">
                        <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={logo} />
                    </div>
                </div>
                <h1 className="text-lg font-semibold"><span className="text-lg text-rose-400 underline font-bold">Question:</span> {question.substring(3, question.length - 4)}</h1>
            </div>

            <div className="ml-8">
                {options.map(option => <Options option={option} id={id}></Options>)}
            </div>


        </div>
    );
};

export default Questions;