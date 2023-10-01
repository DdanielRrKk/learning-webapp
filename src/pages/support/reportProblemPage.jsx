import React, { useState } from 'react';

export default function ReportProblemPage() {
    const [problemDescription, setProblemDescription] = useState('');
    const [reportedBy, setReportedBy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const problemReport = {
            description: problemDescription,
            reportedBy: reportedBy,
        };

        console.log('Problem Report:', problemReport);

        setProblemDescription('');
        setReportedBy('');
    };

    return (
        <div className="container-main">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                
                <h2 className="text-2xl font-semibold mb-4">Report a Problem</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Problem Description
                        </label>
                        <textarea
                            name="description"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            rows="4"
                            placeholder="Describe the problem..."
                            value={problemDescription}
                            onChange={(e) => setProblemDescription(e.target.value)}
                            required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="reportedBy" className="block text-gray-700 font-bold mb-2">
                            Reported By
                        </label>
                        <input
                            type="text"
                            name="reportedBy"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Your name or email"
                            value={reportedBy}
                            onChange={(e) => setReportedBy(e.target.value)}
                            required />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                        Submit Report
                    </button>
                </form>
            </div>
        </div>
    );
}
