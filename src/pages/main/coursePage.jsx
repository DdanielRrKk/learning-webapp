import React from "react";

import { GetCourseFromDatabaseById } from "../../database/testRequestsAPI";

import { useParams } from "react-router-dom";

import SidebarItem from "../../components/sidebarItem";
import ContentItem from "../../components/ContentItem/contentItem.jsx";

import { HandleTransformContentStringToContentArray } from "../../helpers/helpers";

export default function CoursePage() {
    const { courseId } = useParams();
    
    const [course, setCourse] = React.useState([]);
    const [selectedLessonId, setSelectedLessonId] = React.useState(1);
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        GetCourseFromDatabaseById(courseId).then((selectedCourse) => {
            setCourse(selectedCourse);
            setContent(HandleTransformContentStringToContentArray(selectedCourse[1]?.content));
        });
    }, []);

    const handleSelectLessonChange = (lessonId) => setSelectedLessonId(lessonId);

    const handleChangeToPreviousLesson = () => {
        if(selectedLessonId <= 1) return;
        else if(!course[selectedLessonId - 1]?.content) {
            setContent(HandleTransformContentStringToContentArray(course[selectedLessonId - 2]?.content));
            setSelectedLessonId(selectedLessonId - 2);
        }
        else {
            setContent(HandleTransformContentStringToContentArray(course[selectedLessonId - 1]?.content));
            setSelectedLessonId(selectedLessonId - 1);
        }
    }
    const handleChangeToNextLesson = () => {
        if(selectedLessonId >= course.length - 1) return;
        else if (!course[selectedLessonId + 1]?.content) {
            setContent(HandleTransformContentStringToContentArray(course[selectedLessonId + 2]?.content));
            setSelectedLessonId(selectedLessonId + 2);
        }
        else {
            setContent(HandleTransformContentStringToContentArray(course[selectedLessonId + 1]?.content));
            setSelectedLessonId(selectedLessonId + 1);
        }
    }

    console.log('content', content);
    console.log('course', course);

    return (
        <div className='container-main flex-row'>
            <ul className="sidebar">
                {course.map((lesson) => 
                    <SidebarItem 
                        key={lesson.id}
                        isSelected={lesson.id === selectedLessonId}
                        item={lesson}
                        selectLessonHandler={handleSelectLessonChange}
                        setContent={setContent}/>)}
            </ul>

            <main className="content gap-4">
                {content.length !== 0 ? 
                    <>
                        {content.map((item) => (
                            <ContentItem 
                                key={item.id} 
                                type={item.type} 
                                data={item.data}/>
                        ))}
                    </>
                : 
                    <p className="text-4xl">Still in progress...</p>
                }

                <div className="w-full flex justify-evenly items-center mt-10">
                    <button 
                        className="button-action py-2"
                        onClick={handleChangeToPreviousLesson}>
                            Previous
                    </button>

                    <button 
                        className="button-action py-2"
                        onClick={handleChangeToNextLesson}>
                            Next
                    </button>
                </div>
            </main>
        </div>
    );
}
