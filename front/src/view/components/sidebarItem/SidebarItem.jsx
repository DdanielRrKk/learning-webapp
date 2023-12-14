import styles from './SidebarItem.module.css';

function SidebarItem({isSelected, item, selectLessonHandler, setContent}) {
	const handleSelect = () => {
		selectLessonHandler(item.id);
		setContent(item.content);
	};

	if (item?.content) {
		return (
			<li
				key={item.id}
				className={styles.title}
			>
				<p
					className={isSelected ? styles.selectedItem : null}
					onClick={handleSelect}
				>
					{item.title}
				</p>
			</li>
		);
	}

	return (
		<li
			key={item.id}
			className={styles.breaker}
		>
			<p>{item.title}</p>
		</li>
	);
}

export default SidebarItem;
