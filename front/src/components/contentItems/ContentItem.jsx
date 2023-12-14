import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './ContentItem.module.css';

function ContentItem({type, data}) {
	switch (type) {
		case 'img':
			return (
				<div className={styles.imgBox}>
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
							className={styles.titleBox}
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
							className={styles.textBox}
						>
							{item}
						</p>
					))}
				</>
			);

		case 'code':
			return (
				<div className={styles.codeBox}>
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
							className={styles.listBox}
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
