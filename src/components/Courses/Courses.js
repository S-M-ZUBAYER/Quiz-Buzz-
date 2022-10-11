import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Courses = () => {
    const courses = useLoaderData();
    const navigate = useNavigate();
    const startQuiz = (id) => {
        navigate(`/home/${id}`)
    }
    return (
        <div>
            <div>
                <section className="my-8 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                        <h1 className="p-4 text-4xl sm:3xl font-semibold leading-none text-center">Available Courses For Participants</h1>
                        <p className="lg:text-lg sm:text-base font-semibold mx-[10%]">Perhaps the coolest thing about a knowledge quiz is that no matter what your business is.But main things is that the way to gather some extra knowledge in different way...</p>
                    </div>
                </section>
                <div className="max-w-screen-xl p-5 mx-auto dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                        {(courses.data).map(topic => <ItemCart key={topic.id} topic={topic} startQuiz={startQuiz}></ItemCart>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;