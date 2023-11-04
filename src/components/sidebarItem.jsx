import React from "react";

export default function SidebarItem({ isSelected, item, selectLessonHandler, setContent }) {
    const handleSelect = () => {
        selectLessonHandler(item.id);
        setContent(item.content);
    }
    
    if(item?.content) {
        return (
            <li key={item.id} className="course-item">
                <p  className={isSelected ? "course-item-title-selected" : "course-item-title"} 
                    onClick={handleSelect}>
                        {item.title}
                </p>
            </li>
        );
    }

    return (
        <li key={item.id} className="course-item">
            <p className="course-item-breaker">{item.title}</p>
        </li>
    );
}