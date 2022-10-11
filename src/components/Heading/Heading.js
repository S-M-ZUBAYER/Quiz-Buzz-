import React from 'react';
import img from '../../img/heading.jpg'

const Heading = () => {
    return (
        <div>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="lg:w-[50%] flex flex-col justify-center p-6 text-center rounded-sm ">
                        <h1 className="text-5xl font-bold leading-none sm:text-3xl">Check Your
                            <span className="dark:dark:text-violet-400"> Improvement </span>With Quiz Buzz!!!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">If I have ever made any valuable discoveries, it has been due more to patient attention, than to any other talent...</p>
                    </div>
                    <div className="lg:w-[50%] md:w-[100%] flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 w-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Heading;