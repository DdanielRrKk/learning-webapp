import React from "react";

import { Link } from "react-router-dom";


export default function CourseItem({ box }) {
    return (
        <Link 
            key={box.id}
            to={`/course/${box.courseId}`}>
                <img
                    className="w-52 h-52 bg-cover bg-gray-100 rounded-xl" 
                    src={box.image} 
                    alt={box.courseId} 
                    title={box.courseId}/>
                
                <p className="mt-1 text-white text-2xl font-semibold">{box.title}</p>
        </Link>
    );
}
