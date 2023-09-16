import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ContentItem({ type, data, onClick = null }) {
    switch (type) {
        case "title": return (
            <p className="text-4xl">{data}</p>
        );

        case "text": return (
            <p className="">{data}</p>
        );

        case "code": return (
            <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
                {data}
            </SyntaxHighlighter>
        );

        case "img": return (
            <img src={data} alt={data}/>
        );

        // case "button": return (
        //     <button
        //         className="py-3 px-6 border border-gray-200 bg-gray-200 text-black hover:bg-transparent hover:text-white"
        //         onClick={onClick}>
        //             {data}
        //     </button>
        // );

        case "list": return (
            <ul>
                {data.map((item, index) => (
                    <li 
                        key={index}
                        className="pl-4 py-2">
                            - {item}
                    </li>
                ))}
            </ul>
        );

        default: return null;
    }
}
