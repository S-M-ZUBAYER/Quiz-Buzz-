import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 ">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto mt-16 md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Try to familiar with some Topics</h2>
                    <p className="mt-4 mb-12 dark:dark:text-gray-400 text-lg font-semibold mx-[10%]">We all want to expand on our existing knowledge. But sometimes it's impossible to stay consistent with a new skill or habit. It's easy to fall into the trap where you focus only on learning and never get around to implementing the information.</p>
                    <div className="space-y-4 sm:mx-5">
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className="text-lg font-semibold px-4 py-6 focus:outline-none font focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span> What is the Purpose of React Router?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /> React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className=" text-lg font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span>How does Context API work?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">Front end development ecosystem is developing at a fast pace today. New tools and libraries are released continuously. React JS is the most popular front-end development framework and manages a good name in the web development space.<br /> Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application. <br />Context API comes to play to overcome issues and create a pathway of sharing data values in components. It is best for react js development to prevent prop via every app-level tree. <br />Context API is a great addition to react js and helps developers eliminate challenges when passing data. It is the ideal structure to share the data with different components and never pass data via props. <br />If you want to work with context API, you must build context with the help of create context function.Create method() is important to build context and route default value to variables and pass them. Once creating context, you can use the two react components like provider and consumer. </p>
                        </details>
                        <details className="w-full border rounded-lg bg-slate-700" open="">
                            <summary className="text-lg font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400"><span className="font-bold text-orange-400">Question: </span>Tell me something about useRef Hook in React Js?</summary>
                            <p className="text-start text-base font-semibold px-4 py-6 pt-0 ml-4 -mt-4 dark:dark:text-gray-400">React hooks were introduced in React v16.8, and made functional components incredibly powerful. With React hooks like useCallback , useEffect and others. <br />useRef takes in a single function argument, initialValue , and returns a mutable reference object whose .current value is initialized to the passed argument. useRef is essentially a “box” whose current key holds a mutable value. <br />useRef serves a couple main purposes: <br /> 1.Access DOM elements <br />2.Persist values across successive renders <br />useRef is most commonly used when accessing React DOM elements. For example, if you’re trying to access an input element after it’s been mounted to the DOM, instead of using the traditional document.getElementById or any other document method to access to element (like you would in vanilla JS). </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;