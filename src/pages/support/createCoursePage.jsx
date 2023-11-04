import React from "react";

import { useDispatch } from "react-redux";
import { setLesson } from "../../redux/lessonSlice/lessonSlice";

import { Link } from "react-router-dom";

import CreateCourseItem from "../../components/CreateCourseItem/createCourseItem";

import { MAX_LENGTH } from "../../helpers/constants";

export default function CreateCoursePage() {
    const dispatch = useDispatch();

    const [courseName, setCourseName] = React.useState('');
    const [lessons, setLessons] = React.useState([]);
    const [courseIcon, setCourseIcon] = React.useState(null);

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
        console.log('handleAddIcon');
        // setCourseIcon();
    }
    const handleOnDragOver = (e) => e.preventDefault();
    const handleOnDrop = (e) => {
        const file = e.dataTransfer.files[0];
        if(file) setCourseIcon(URL.createObjectURL(file));
    }

    const handleSaveCourse = () => {
        localStorage.removeItem('lessons');
        // const courseObject = {
            
        // };
        // console.log('courseObject', courseObject);
    }


    const handleGoUp = (id) => {
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        const index = array.findIndex((item) => item.id === id);
        if(index === 0) return;

        const tempId1 = array[index].id;
        const tempId2 = array[index - 1].id;

        const tempLesson = array[index];
        array[index] = array[index - 1];
        array[index - 1] = tempLesson;

        array[index].id = tempId1;
        array[index - 1].id = tempId2;

        setLessons(array);
        localStorage.setItem('lessons', JSON.stringify(array));
    }
    const handleGoDown = (id) => {
        const array = localStorage.getItem('lessons') ? JSON.parse(localStorage.getItem('lessons')) : [];
        const index = array.findIndex((item) => item.id === id);
        if(index === array.length - 1) return;
        
        const tempId1 = array[index].id;
        const tempId2 = array[index + 1].id;

        const tempLesson = array[index];
        array[index] = array[index + 1];
        array[index + 1] = tempLesson;

        array[index].id = tempId1;
        array[index + 1].id = tempId2;

        setLessons(array);
        localStorage.setItem('lessons', JSON.stringify(array));
    }
    const handleOpenForEdit = (item) => dispatch(setLesson(item));
    // const handleOpenForEdit = (item) => localStorage.setItem('lessonForEdit', JSON.stringify(item));
    const handleDeleteItem = (id) => {
        const array = JSON.parse(localStorage.getItem('lessons'));
        const tempArray = [];

        for (let i = 0; i < array.length; i++) {
            if(array[i].id < id) tempArray.push(array[i]);
            else if (array[i].id > id) {
                array[i].id--;
                tempArray.push(array[i]);
            }
        }

        setLessons(tempArray);
        localStorage.setItem('lessons', JSON.stringify(tempArray));
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

            <div
                className="w-64 h-64 border-dashed border-2 border-gray-300 rounded-lg p-1 flex flex-col items-center justify-center"
                onDrop={handleOnDrop}
                onDragOver={handleOnDragOver}
                >
                {courseIcon ? (
                    <>
                        <img src={courseIcon} alt="Uploaded" className="w-full h-full object-cover" />
                        
                    </>
                ) : (
                    <div className="flex flex-col items-center">
                        Drag and drop an image here
                    </div>
                )}
            </div>

            <div>
                <input
                    type="file"
                    onChange={(e) => setCourseIcon(URL.createObjectURL(e.target.files[0]))}
                />
            </div>

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
                        goUpHandler={handleGoUp}
                        goDownHandler={handleGoDown}
                        openEditHandler={handleOpenForEdit}
                        deleteHandler={handleDeleteItem}/>
                ))}
            </ul>
        </div>
    )
}
