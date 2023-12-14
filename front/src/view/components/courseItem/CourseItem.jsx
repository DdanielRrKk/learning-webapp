import React from 'react';

import {Link} from 'react-router-dom';

import styles from './CourseItem.module.css';

function CourseItem({box}) {
	return (
		<Link
			key={box.id}
			className={styles.boxCourse}
			to={`/course/${box.courseId}`}
		>
			<img
				src={box.image}
				alt={box.courseId}
				title={box.courseId}
			/>
			<p>{box.title}</p>
		</Link>
	);
}

export default CourseItem;
