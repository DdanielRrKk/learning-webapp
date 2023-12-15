import styles from './Content.module.css';

function TitleContent({data}) {
	return <p className={styles.titleBox}>{data}</p>;
}

export default TitleContent;
