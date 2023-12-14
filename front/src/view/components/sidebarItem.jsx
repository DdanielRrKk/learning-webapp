import React from 'react';

function SidebarItem({isSelected, item, selectLessonHandler, setContent}) {
	const handleSelect = () => {
		selectLessonHandler(item.id);
		setContent(item.content);
	};

	if (item?.content) {
		return (
			<li
				key={item.id}
				className='title-sidebar'
			>
				<p
					className={isSelected ? 'selected-sidebar-item' : null}
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
			className='breaker'
		>
			<p>{item.title}</p>
		</li>
	);
}

export default SidebarItem;
