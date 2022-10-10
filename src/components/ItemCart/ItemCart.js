import React from 'react';

const ItemCart = ({ topic, startQuiz }) => {
    const { name, logo, total } = topic;

    return (

        <div onClick={() => startQuiz(topic.id)} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-slate-600" style={{ backgroundImage: `url(${logo})` }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:dark:via-transparent dark:dark:from-gray-900 dark:dark:to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                <p className="px-3 py-2 text-lg font-bold tracking-wider uppercase dark:dark:text-gray-100">{name}</p>
                <div className="flex flex-col justify-start text-center dark:dark:text-gray-100">
                    <button className="btn btn-sm btn-outline btn-accent">Start</button>

                </div>
            </div>
            <h2 className="z-10 p-5">
                <p className="font-bold text-lg dark:dark:text-gray-100">Total Quiz: {total}</p>
            </h2>
        </div>


    );
};

export default ItemCart;