import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './ContentItem.module.css';

function CodeContent({key, data}) {
	return (
		<div
			key={key}
			className={styles.codeBox}
		>
			<SyntaxHighlighter
				language='javascript'
				style={stackoverflowDark}
			>
				{data.join('\n')}
			</SyntaxHighlighter>
		</div>
	);
}

export default CodeContent;
