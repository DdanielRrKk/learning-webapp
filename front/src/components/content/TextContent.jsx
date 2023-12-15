import styles from './Content.module.css';

function TextContent({data}) {
	return <p className={styles.textBox}>{data}</p>;
}

export default TextContent;
