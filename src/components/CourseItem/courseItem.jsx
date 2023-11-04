import React from "react";

import { Link } from "react-router-dom";

import './courseItem.css';

export default function CourseItem({ box }) {
    return (
        <Link 
            className="box"
            key={box.id}
            to={`/course/${box.courseId}`}>
                <img
                    src={box.image} 
                    alt={box.courseId} 
                    title={box.courseId}/>
                
                <p>{box.title}</p>
        </Link>
    );
}
