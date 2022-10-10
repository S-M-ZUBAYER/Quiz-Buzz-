import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Heading from '../Heading/Heading';
import ItemCart from '../ItemCart/ItemCart';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses.data)
    return (
        <div>
            <Heading></Heading>
            <section className="my-8 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                </div>
            </section>
            <div className="max-w-screen-xl p-5 mx-auto dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    {(courses.data).map(topic => <ItemCart key={topic.id} topic={topic}></ItemCart>)}
                </div>
            </div>
        </div>
    );
};

export default Home;