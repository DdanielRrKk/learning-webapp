import React from "react";

import { Link } from "react-router-dom";

export default function SupportPage() {
    return (
        <div className="container-main">
            <Link
                className="button-action"
                to={'/create'}>
                    Write a Course
            </Link>

            <button
                className="button-action"
                onClick={() => console.log('clicked')}>
                Give Idea
            </button>

            <Link 
                className="button-action"
                to={'/problem'}>
                Report a Problem
            </Link>
        </div>
    );
}