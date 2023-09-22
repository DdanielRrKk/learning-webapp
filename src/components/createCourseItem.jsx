import React from "react";

import { 
    IoCaretUpOutline, 
    IoCaretDownOutline,
    IoPencilSharp 
} from "react-icons/io5";
import { Link } from "react-router-dom";


export default function CreateCourseItem({ canGoUp, canGoDown, item, goUpHandler, goDownHandler, openEditHandler }) {
    const handleGoUp = () => goUpHandler(item.id);
    const handleGoDown = () => goDownHandler(item.id);
    const handleOpenEdit = () => openEditHandler(item);

    return (
        <li className="flex">
            <div className="flex flex-col justify-center items-center">
                {!canGoUp ? <IoCaretUpOutline className="text-2xl cursor-pointer" onClick={handleGoUp}/> : null}
                {!canGoDown ? <IoCaretDownOutline className="text-2xl cursor-pointer" onClick={handleGoDown}/> : null}
            </div>

            <div key={item.id} className="course-item text-3xl cursor-default">
                <p className={item?.content ? "" : "course-item-breaker"}>{item.title}</p>
            </div>

            {!item?.content ? null : 
                <Link to={'/write'} onClick={handleOpenEdit}>
                    <IoPencilSharp className="text-2xl"/>
                </Link>
            }
        </li>
    );
}
