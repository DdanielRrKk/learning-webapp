import styles from './Content.module.css';

function ImageContent({data}) {
	return (
		<div className={styles.imgBox}>
			<img
				src={data}
				alt={data}
			/>
		</div>
	);
}

export default ImageContent;
