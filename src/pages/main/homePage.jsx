import React from "react";

import { Link } from "react-router-dom";

import CourseItem from "../../components/courseItem";

import { GetAllContentFromDatabase } from "../../database/testRequestsAPI";

export default function HomePage() {
    const [courses, setCourses] = React.useState([]);

    const handleBuyMeACoffeeClick = () => {
        console.log('clicked')
    }

    React.useEffect(() => {
        GetAllContentFromDatabase().then((data) => {
            setCourses(data);
        })
    }, []);

    return (
        <div className='container-main p-4 gap-10 text-center overflow-y-scroll'>
            <h1 className="text-7xl font-semibold">Want to learn programming languages?</h1>
            <p>PrimeCode Academy allows you to learn programming languages from the comfort of your own home. Weather your goal is to become a full-stack developer or just learn the basics, we have a course for you.</p>
            
            <p className="text-2xl font-semibold">Courses:</p>
            
            <div className="container-body gap-y-16">
                {courses.map((box) => (
                    <CourseItem box={box} />
                ))}
            </div>

            <div className="flex gap-5 flex-col md:gap-20 md:flex-row">
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
