import styles from './Content.module.css';

function ImageContent({key, data}) {
	return (
		<div className={styles.imgBox}>
			<img
				key={key}
				src={data}
				alt={data}
			/>
		</div>
	);
}

export default ImageContent;
