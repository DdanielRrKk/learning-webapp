import React from "react";

import { useParams } from "react-router-dom";

import SidebarItem from "../../components/sidebarItem";
import ContentItem from "../../components/contentItem";

import { 
    JAVASCRIPT_LESSONS,
    REACT_LESSONS,
    GOLANG_LESSONS
} from "../../helpers/constants";

export default function CoursePage() {
    const { courseId } = useParams();
    
    const [course, setCourse] = React.useState([]);
    const [selectedLessonId, setSelectedLessonId] = React.useState(1);
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        switch(courseId) {
            case 'javascript': setCourse(JAVASCRIPT_LESSONS); setContent(JAVASCRIPT_LESSONS[1]?.content); break;
            case 'react': setCourse(REACT_LESSONS); setContent(REACT_LESSONS[1]?.content); break;
            case 'golang': setCourse(GOLANG_LESSONS); setContent(GOLANG_LESSONS[1]?.content); break;
            // case 'firebase': setCourse(JAVASCRIPT_LESSONS); setContent(JAVASCRIPT_LESSONS[1]?.content); break;
        }
    }, []);

    const handleSelectLessonChange = (lessonId) => setSelectedLessonId(lessonId);

    // console.log(content);

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
            </main>
        </div>
    );
}
