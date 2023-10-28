import React from "react";

import { Link } from "react-router-dom";

export default function SupportPage() {
    return (
        <div className="container-main">
            <p className="text-5xl font-semibold mb-20">Support Our Page</p>

            <div className="w-full flex justify-evenly">
                <Link
                    className="button-action"
                    to={'/create'}>
                        Write a Course
                </Link>

                <Link 
                    className="button-action"
                    to={'/feedback/idea'}>
                    Give an Idea
                </Link>

                <Link 
                    className="button-action"
                    to={'/feedback/problem'}>
                    Report a Problem
                </Link>
            </div>
        </div>
    );
}