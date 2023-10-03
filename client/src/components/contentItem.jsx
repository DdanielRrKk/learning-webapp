import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ContentItem({ type, data }) {
    switch (type) {
        case "img": return (
            <div className="w-full flex justify-center items-center">
                {data.map((item, index) => (
                    <img key={index} className="w-4/6 h-fit" src={item} alt={item}/>
                ))}
            </div>
        );
        
        case "title": return (
            <>
                {data.map((item, index) => (
                    <p key={index} className="text-4xl">{item}</p>
                ))}
            </>
        );
        
        case "text": return (
            <>
                {data.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </>
        );
        
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
