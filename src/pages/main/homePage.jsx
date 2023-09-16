import React from "react";

import { Link } from "react-router-dom";

import { BOXES } from '../../helpers/constants';

export default function HomePage() {
    return (
        <div className='container-main p-4 gap-10'>
            <h1 className=" text-7xl font-semibold">Want to learn programming languages?</h1>
            <p>Daniels Academy allows you to learn programming languages from the comfort of your own home. Weather your goal is to become a full-stack developer or just learn the basics, we have a course for you.</p>
            
            <p className="text-2xl font-semibold">Courses:</p>
            
            <div className="container-body">
                {BOXES.map((box) => (
                    <Link 
                        key={box.id}
                        className="box"
                        to={`/course/${box.courseId}`}>
                        <img src={box.image} alt={box.text} />
                    </Link>
                ))}
            </div>

            <button
                className="py-3 px-6 mb-10 text-lg font-semibold border border-gray-200 bg-gray-200 text-black hover:bg-transparent hover:text-white"
                onClick={() => console.log('clicked')}>
                Buy me a Coffee
            </button>
        </div>
    );
}
