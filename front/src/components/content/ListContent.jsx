import styles from './ContentItem.module.css';

function ListContent({key, data}) {
	return (
		<ul key={key}>
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
