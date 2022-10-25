import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo,id } = topic;
    return (
        <div>

            <div className=" max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-600 dark:border-gray-700">
               
                    <img className="p-10 rounded-t-lg" src={logo} alt=""/>
                
                <div className=" flex justify-between sm:ju p-5">
                    
                        <h5 className="mb-2 mr-2 text-xl font-semi bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                   
                
                    <Link to={`/home/${id}`} className="inline-flex items-center py-1 px-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-md hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-700  dark:hover:bg-cyan-500 dark:focus:ring-blue-800">
                        Start Practice
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Topic;