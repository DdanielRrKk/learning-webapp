import React from 'react';

import {Link} from 'react-router-dom';

function CourseItem({box}) {
	return (
		<Link
			key={box.id}
			className='box-course'
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
