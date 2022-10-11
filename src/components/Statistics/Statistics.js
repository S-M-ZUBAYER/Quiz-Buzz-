import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Statistics = () => {
    const courses = useLoaderData();

    return (
        <div className="flex justify-center mt-10">
            <div>
                <h1 className="p-4 text-4xl sm:text-3xl font-semibold mx-auto mb-10 leading-none text-center">Available Courses And Total Quizzes Show in Graph</h1>
                <LineChart className="" width={600} height={300} data={courses.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

        </div>
    );
};

export default Statistics;