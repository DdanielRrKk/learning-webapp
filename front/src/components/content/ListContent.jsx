import styles from './Content.module.css';

function ListContent({data}) {
	return (
		<ul>
			{data.map((item, index) => (
				<p
					key={index}
					className={styles.listBox}
				>
					{item}
				</p>
			))}
		</ul>
	);
}

export default ListContent;
