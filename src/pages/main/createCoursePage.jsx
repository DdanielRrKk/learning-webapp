import React from "react";

import { Link } from "react-router-dom";

export default function CreateCoursePage() {
    const [name, setName] = React.useState('');
    const [lessons, setLessons] = React.useState([]);


    React.useEffect(() => {
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        if(lessons.length !== array.length) setLessons(array);
    }, [lessons]);


    const handleNameChange = (e) => setName(e.target.value);

    const handleAddSection = () => console.log('handleAddSection');
    const handleNavigateToWritePage = () => localStorage.setItem('lessons', JSON.stringify(lessons));
    const handleSaveCourse = () => {
        localStorage.removeItem('lessons');
    }

    console.log('lessons: ', lessons);

    return (
        <div className="container-main gap-10">
            <p className="text-5xl font-semibold">Course Creation Page</p>
            <input
                value={name}
                onChange={handleNameChange}
                placeholder="Course Name"/>

            <div className="flex gap-5">
                <button 
                    className="button-action"
                    onClick={handleAddSection}>
                    Add Section
                </button>

                <Link
                    className="button-action"
                    onClick={handleNavigateToWritePage} 
                    to={'/write'}>
                    Add Lesson
                </Link>
                
                <button 
                    className="button-action"
                    onClick={handleSaveCourse}>
                    Save Course (delete)
                </button>
            </div>

            <div>
                {lessons.map((lesson) => (
                    <div key={lesson.id}>
                        <p>{JSON.stringify(lesson)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
