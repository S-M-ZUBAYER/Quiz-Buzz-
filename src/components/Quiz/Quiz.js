import React from 'react';

const Quiz = ({ quizIntro }) => {
    const { logo, name, total } = quizIntro;
    return (
        <div>
            <div className=" h-full p-3 space-y-2 w-96 dark:dark:bg-gray-900 bg-slate-700 mt-5 mx-auto md:w-[90%]  dark:dark:text-gray-100 ">
                <div className="flex items-center p-2 space-x-4">
                    <div className="flex flex-col items-start justify-center">
                        <div className="flex space-x-5">
                            <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src={logo} />
                        </div>
                    </div>
                    {/* <img src={logo} alt="" className="w-12 h-12 rounded-full dark:dark:bg-gray-500" /> */}
                    <div>
                        <h2 className="text-lg font-semibold">Result Summary On {name}</h2>

                    </div>
                </div>
                <div className=" divide-gray-700">
                    <ul className=" pb-4 text-left ml-3">
                        <li className="dark:dark:bg-gray-800 dark:dark:text-gray-50 mb-3 text-center">

                            <p className="text-lg font-semibold">Total Quizzes: {total}</p>
                        </li>
                        <li className="">

                            <p className="text-base font-semibold">Marks Per Quiz: 5</p>
                        </li>
                        <li>

                            <p className="text-base font-semibold">Total Correct Ans: 5</p>
                        </li>
                        <li className='mb-2'>

                            <p className="text-base font-semibold">Total Wrong Ans: 5</p>
                        </li>
                        <hr />
                        <li className="mt-2">

                            <p className="text-lg font-semibold">Total Marks: {total}</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Quiz;