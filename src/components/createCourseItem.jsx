import React from "react";

import { IoCaretUpOutline, IoCaretDownOutline } from "react-icons/io5";


export default function CreateCourseItem({ item, goUp, goDown, canGoUp, canGoDown }) {
    const handleGoUp = () => goUp(item.id);
    const handleGoDown = () => goDown(item.id);

    return (
        <li className="flex">
            <div className="flex flex-col justify-center items-center">
                {!canGoUp ? <IoCaretUpOutline className="text-2xl cursor-pointer" onClick={handleGoUp}/> : null}
                {!canGoDown ? <IoCaretDownOutline className="text-2xl cursor-pointer" onClick={handleGoDown}/> : null}
            </div>

            <div key={item.id} className="course-item text-3xl cursor-default">
                <p className={item?.content ? "" : "course-item-breaker"}>{item.title}</p>
            </div>
        </li>
    );
}
