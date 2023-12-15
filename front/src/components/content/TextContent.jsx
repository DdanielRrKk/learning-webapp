import styles from './ContentItem.module.css';

function TextContent({key, data}) {
	return (
		<p
			key={key}
			className={styles.textBox}
		>
			{data}
		</p>
	);
}

export default TextContent;
