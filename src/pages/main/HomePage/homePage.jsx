import React from "react";
import './style.css';

import { Link } from "react-router-dom";

import CourseItem from "../../../components/CourseItem/courseItem";

// import { GetAllContentFromDatabase } from "../../../database/testRequestsAPI";
import { GetAllCourses } from "../../../api/coursesAPI";

export default function HomePage() {
    const [courses, setCourses] = React.useState([]);

    const handleBuyMeACoffeeClick = () => {
        console.log('clicked')
    }

    React.useEffect(() => {
        GetAllCourses().then((data) => {
            console.log('Response received:', data);
            setCourses(data)
        })
    }, []);

    return (
        <div className='container-main-home'>
            <h1 className="title">Want to learn programming languages?</h1>
            <p>PrimeCode Academy allows you to learn programming languages from the comfort of your own home. Weather your goal is to become a full-stack developer or just learn the basics, we have a course for you.</p>
            
            <p className="subtitle">Courses:</p>
            
            <div className="container-body-home">
                {courses.map((box) => (
                    <CourseItem box={box} />
                ))}
            </div>

            <div className="content-home">
                <button className="button-action" onClick={handleBuyMeACoffeeClick}>
                    Buy me a Coffee
                </button>

                <Link className="button-action" to={'/support'}>
                    Offer Support
                </Link>
            </div>
        </div>
    );
}
