import React, { useState } from 'react';

import { MAX_LENGTH } from '../../helpers/constants';

export default function ReportProblemPage() {
    const [problemTitle, setProblemTitle] = useState('');
    const [problemDescription, setProblemDescription] = useState('');


    const handleProblemTitleChange = (e) => setProblemTitle(e.target.value);
    const handleProblemDescriptionChange = (e) => setProblemDescription(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const problemReport = {
            title: problemTitle,
            description: problemDescription
        };

        console.log('Problem Report:', problemReport);

        setProblemDescription('');
    };

    return (
        <div className="container-main flex flex-col gap-10 p-4 ">
            <p className="text-5xl font-semibold">Report a Problem</p>

            <form className="w-full flex flex-col gap-10" onSubmit={handleSubmit}>
                <input
                    className="input-action"
                    value={problemTitle}
                    onChange={handleProblemTitleChange}
                    maxLength={MAX_LENGTH}
                    placeholder="Problem Title"/>

                <textarea
                    className="input-action resize-none"
                    rows="4"
                    placeholder="Describe the problem..."
                    value={problemDescription}
                    onChange={handleProblemDescriptionChange}
                    required />

                <button
                    type="submit"
                    className="button-action">
                    Submit Report
                </button>
            </form>
        </div>
    );
}
