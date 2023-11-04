import React from "react";
import './sidebarItem.css';

export default function SidebarItem({ isSelected, item, selectLessonHandler, setContent }) {
    const handleSelect = () => {
        selectLessonHandler(item.id);
        setContent(item.content);
    }
    
    if(item?.content) {
        return (
            <li key={item.id} className="title">
                <p className={isSelected ? "selected" : null} 
                    onClick={handleSelect}>
                        {item.title}
                </p>
            </li>
        );
    }

    return (
        <li key={item.id} className="breaker">
            <p>{item.title}</p>
        </li>
    );
}