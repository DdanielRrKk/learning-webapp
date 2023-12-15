import styles from './ContentItem.module.css';

function TitleContent({key, data}) {
	return (
		<p
			key={key}
			className={styles.titleBox}
		>
			{data}
		</p>
	);
}

export default TitleContent;
