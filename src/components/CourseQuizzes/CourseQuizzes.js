import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { storeValue } from '../../Utilities/GotData';
import Quiz from '../Quiz/Quiz';
import QuizInfo from '../QuizInfo/QuizInfo';

const CourseQuizzes = () => {
    const courseQuizzes = useLoaderData();

    // set useState to show the update result
    const [alreadyAns, setAlreadyAns] = useState(storeValue('already-ans'));
    const [correctAns, setCorrectAns] = useState(storeValue('correct-ans'));
    const [wrongAns, setWrongAns] = useState(storeValue('wrong-ans'));
    const result = { alreadyAns, correctAns, wrongAns };

    // create a function to load data from local storage and show the current result
    const handlerCurrentResult = () => {
        const alreadyAnsDb = storeValue('already-ans');
        setAlreadyAns(alreadyAnsDb);
        const allCorrectAnsDb = storeValue('correct-ans');
        setCorrectAns(allCorrectAnsDb);
        const allWrongAnsDb = storeValue('wrong-ans');
        setWrongAns(allWrongAnsDb);
        console.log(alreadyAns, correctAns, wrongAns)
    }

    return (
        <div className=" flex flex-col-reverse lg:grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <QuizInfo handlerCurrentResult={handlerCurrentResult} quizIntro={courseQuizzes.data}></QuizInfo>
            </div>
            <div className="sm:mt-5">
                <Quiz result={result} quizIntro={courseQuizzes.data}></Quiz>
            </div>
        </div>
    );
};

export default CourseQuizzes;