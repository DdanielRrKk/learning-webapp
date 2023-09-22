import React from "react";

import { Link } from "react-router-dom";

import CreateCourseItem from "../../components/createCourseItem";

import { MAX_LENGTH } from "../../helpers/constants";

export default function CreateCoursePage() {
    const [courseName, setCourseName] = React.useState('');
    const [lessons, setLessons] = React.useState([]);

    const [isAddSectionOpen, setIsAddSectionOpen] = React.useState(false);
    const [sectionName, setSectionName] = React.useState('');

    console.log('lessons', lessons);

    React.useEffect(() => {
        // localStorage.removeItem('lessons');
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        if(lessons.length !== array.length) setLessons(array);
    }, [lessons]);


    const handleCourseNameChange = (e) => setCourseName(e.target.value);
    const handleSectionNameChange = (e) => setSectionName(e.target.value);

    const handleAddSectionOpen = () => setIsAddSectionOpen(!isAddSectionOpen);

    const handleAddingSection = () => {
        if(sectionName === '') {
            console.log('Please enter section name');
            return;
        }

        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        array.push({ id: array.length + 1, title: sectionName });
        setLessons(array);
        localStorage.setItem('lessons', JSON.stringify(array));
        
        setIsAddSectionOpen(false);
        setSectionName('');
    }

    const handleAddIcon = () => {
        console.log('clicked');
    }

    const handleSaveCourse = () => {
        const courseObject = {
            
        };
        console.log('courseObject', courseObject);
    }


    const handleGoUp = (id) => {
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        const index = array.findIndex((item) => item.id === id);
        if(index === 0) return;

        const tempLesson = array[index];
        array[index] = array[index - 1];
        array[index - 1] = tempLesson;
        setLessons(array);
        localStorage.setItem('lessons', JSON.stringify(array));
    }
    const handleGoDown = (id) => {
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        const index = array.findIndex((item) => item.id === id);
        if(index === array.length - 1) return;
        
        const tempLesson = array[index];
        array[index] = array[index + 1];
        array[index + 1] = tempLesson;
        setLessons(array);
        localStorage.setItem('lessons', JSON.stringify(array));
    }


    return (
        <div className="container-main gap-10 sm:px-10 md:px-24 lg:px-40 xl:px-60">
            <p className="text-5xl font-semibold">Course Creation Page</p>

            <input
                className="input-action"
                value={courseName}
                onChange={handleCourseNameChange}
                maxLength={MAX_LENGTH}
                placeholder="Course Name"/>

            <div className="w-full flex justify-evenly">
                <div className="flex gap-5">
                    <button 
                        className="button-action"
                        onClick={handleAddSectionOpen}>
                        Add Section
                    </button>

                    <Link
                        className="button-action"
                        to={'/write'}>
                        Add Lesson
                    </Link>

                    <button 
                        className="button-action"
                        onClick={handleAddIcon}>
                        Add Icon
                    </button>
                </div>
                
                <button 
                    className="button-action"
                    onClick={handleSaveCourse}>
                    Save Course
                </button>
            </div>

            {!isAddSectionOpen ? null :
                <div className="w-full h-14 flex gap-5">
                    <input 
                        className="input-action"
                        value={sectionName}
                        onChange={handleSectionNameChange}
                        maxLength={MAX_LENGTH}
                        placeholder="Section Name"/>

                    <button 
                        className="button-action h-full"
                        onClick={handleAddingSection}>
                        Add
                    </button>
                </div>
            }

            <ul className="w-full flex flex-col gap-6 px-8">
                {lessons.map((lesson) => (
                    <CreateCourseItem 
                        key={lesson.id} 
                        item={lesson}
                        canGoUp={lesson.id === lessons[0].id}
                        canGoDown={lesson.id === lessons[lessons.length - 1].id}
                        goUp={handleGoUp}
                        goDown={handleGoDown}/>
                ))}
            </ul>
        </div>
    )
}
