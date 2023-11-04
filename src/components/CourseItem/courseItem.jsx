import React from "react";
import './style.css';

import { Link } from "react-router-dom";


export default function CourseItem({ box }) {
    return (
        <Link 
            key={box.id}
            className="box-course"
            to={`/course/${box.courseId}`}>
                <img src={box.image} alt={box.courseId} title={box.courseId}/>
                <p>{box.title}</p>
        </Link>
    );
}
