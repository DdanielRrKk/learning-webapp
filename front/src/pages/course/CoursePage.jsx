import React from 'react';

import {useParams} from 'react-router-dom';

import SidebarItem from '../../components/sidebarItem/SidebarItem';
import ContentList from '../../components/list/ContentList';

import {handleTransformContentStringToContentArray} from '../../utils/helpers';

// import {GetCourseById} from '../../api/auth.services';
import {JAVASCRIPT_LESSONS} from '../../utils/constants';

import styles from './CoursePage.module.css';

function CoursePage() {
	const {courseId} = useParams();

	const [course, setCourse] = React.useState([]);
	const [selectedLessonId, setSelectedLessonId] = React.useState(1);
	const [content, setContent] = React.useState([]);

	React.useEffect(() => {
		// GetCourseById(courseId).then((selectedCourse) => {
		// setCourse(selectedCourse);
		// setContent(handleTransformContentStringToContentArray(selectedCourse[1]?.content));
		// });
		setCourse(JAVASCRIPT_LESSONS);
		setContent(handleTransformContentStringToContentArray(JAVASCRIPT_LESSONS[1]?.content));
	}, []);

	const handleSelectLessonChange = lessonId => setSelectedLessonId(lessonId);

	const handleChangeToPreviousLesson = () => {
		if (selectedLessonId <= 1) return;
		else if (!course[selectedLessonId - 1]?.content) {
			setContent(handleTransformContentStringToContentArray(course[selectedLessonId - 2]?.content));
			setSelectedLessonId(selectedLessonId - 2);
		} else {
			setContent(handleTransformContentStringToContentArray(course[selectedLessonId - 1]?.content));
			setSelectedLessonId(selectedLessonId - 1);
		}
	};
	const handleChangeToNextLesson = () => {
		if (selectedLessonId >= course.length - 1) return;
		else if (!course[selectedLessonId + 1]?.content) {
			setContent(handleTransformContentStringToContentArray(course[selectedLessonId + 2]?.content));
			setSelectedLessonId(selectedLessonId + 2);
		} else {
			setContent(handleTransformContentStringToContentArray(course[selectedLessonId + 1]?.content));
			setSelectedLessonId(selectedLessonId + 1);
		}
	};

	return (
		<div
			id='course'
			className={styles.container}
		>
			<ul className={styles.sidebar}>
				{course.map(lesson => (
					<SidebarItem
						key={lesson.id}
						isSelected={lesson.id === selectedLessonId}
						item={lesson}
						selectLessonHandler={handleSelectLessonChange}
						setContent={setContent}
					/>
				))}
			</ul>

			<div className={styles.article}>
				{content.length !== 0 ? (
					<ContentList data={content} />
				) : (
					<p className={styles.title}>Still in progress...</p>
				)}

				<div className={styles.navigation}>
					<button
						className='button-action'
						onClick={handleChangeToPreviousLesson}
					>
						Previous
					</button>

					<button
						className='button-action'
						onClick={handleChangeToNextLesson}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}

export default CoursePage;
