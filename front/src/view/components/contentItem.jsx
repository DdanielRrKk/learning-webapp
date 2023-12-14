import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ContentItem({type, data}) {
	switch (type) {
		case 'img':
			return (
				<div className='img-box'>
					{data.map((item, index) => (
						<img
							key={index}
							src={item}
							alt={item}
						/>
					))}
				</div>
			);

		case 'title':
			return (
				<>
					{data.map((item, index) => (
						<p
							key={index}
							className='title-box'
						>
							{item}
						</p>
					))}
				</>
			);

		case 'text':
			return (
				<>
					{data.map((item, index) => (
						<p
							key={index}
							className='text-box'
						>
							{item}
						</p>
					))}
				</>
			);

		case 'code':
			return (
				<div className='code-box'>
					<SyntaxHighlighter
						language='javascript'
						style={stackoverflowDark}
					>
						{data.join('\n')}
					</SyntaxHighlighter>
				</div>
			);

		case 'list':
			return (
				<ul>
					{data.map((item, index) => (
						<li
							key={index}
							className='list-box'
						>
							{item}
						</li>
					))}
				</ul>
			);

		default:
			return null;
	}
}

export default ContentItem;
