import React from "react";
import './style.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function ContentItem({ type, data }) {
    switch (type) {
        case "img": return (
            <div className="img-box">
                {data.map((item, index) => (
                    <img key={index} src={item} alt={item}/>
                ))}
            </div>
        );
        
        case "title": return (
            <>
                {data.map((item, index) => (
                    <p key={index} className="text-box">{item}</p>
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
            <div className="code-box">
                <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
                    {data.join("\n")}
                </SyntaxHighlighter>
            </div>
        );
        
        case "list": return (
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="list-box">
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
