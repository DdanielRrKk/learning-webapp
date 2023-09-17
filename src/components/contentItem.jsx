import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ContentItem({ type, data }) {
    switch (type) {
        case "title": return <p className="text-4xl">{data}</p>;
        case "text": return <p>{data}</p>;
        case "img": return <img className="w-5/6 h-fit" src={data} alt={data}/>;
        case "code": return (
            <div className="h-fit">
                <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
                    {data.join("\n")}
                </SyntaxHighlighter>
            </div>
        );
        case "list": return (
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="pl-4 py-2">
                        - {item}
                    </li>
                ))}
            </ul>
        );
        // case "button": return (
        //     <button
        //         className="py-3 px-6 border border-gray-200 bg-gray-200 text-black hover:bg-transparent hover:text-white"
        //         onClick={onClick}>
        //             {data}
        //     </button>
        // );

        default: return null;
    }
}
