import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './Content.module.css';

function CodeContent({data}) {
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
}

export default CodeContent;
