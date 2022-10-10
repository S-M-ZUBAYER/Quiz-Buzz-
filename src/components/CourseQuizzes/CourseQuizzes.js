import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseQuizzes = () => {
    const courseQuizzes = useLoaderData();
    console.log(courseQuizzes)
    return (
        <div>
            <h1>All quetions:</h1>
        </div>
    );
};

export default CourseQuizzes;