import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import img from '../../img/quiz.jpg'

const Header = () => {
    const courses = useLoaderData();
    return (
        <div className=" navbar sticky top-0 z-40 bg-slate-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/home'>Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to='/courses' className="justify-between">
                                Courses
                            </NavLink>

                        </li>
                        <li><NavLink to='/statistics'>Statistics</NavLink></li>

                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </ul>
                </div>
                <Link href="./" className="btn btn-ghost normal-case text-xl">Quiz Buzz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li tabIndex={0}>
                        <NavLink to='/courses'>
                            Courses
                        </NavLink>
                    </li>
                    <li><NavLink to='/statistics'>Statistics</NavLink></li>

                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-14 h-14 rounded-full mr-3 lg:mr-5" src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;