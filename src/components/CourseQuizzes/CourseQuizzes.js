import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import QuizInfo from '../QuizInfo/QuizInfo';

const CourseQuizzes = () => {
    const courseQuizzes = useLoaderData();
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <QuizInfo quizIntro={courseQuizzes.data}></QuizInfo>
            </div>
            <div>
                <Quiz quizIntro={courseQuizzes.data}></Quiz>
            </div>
        </div>

    );
};

export default CourseQuizzes;