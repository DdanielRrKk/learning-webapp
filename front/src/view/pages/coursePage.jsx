import React from "react";

import { useParams } from "react-router-dom";

import SidebarItem from "../../view/components/sidebarItem";
import ContentItem from "../../view/components/contentItem";

import { HandleTransformContentStringToContentArray } from "../../helpers/helpers";

import { GetCourseById } from "../../api/coursesAPI";
import { JAVASCRIPT_LESSONS } from "../../helpers/constants";

export default function CoursePage() {
	const { courseId } = useParams();

	const [course, setCourse] = React.useState([]);
	const [selectedLessonId, setSelectedLessonId] = React.useState(1);
	const [content, setContent] = React.useState([]);

	React.useEffect(() => {
		// GetCourseById(courseId).then((selectedCourse) => {
		// setCourse(selectedCourse);
		// setContent(HandleTransformContentStringToContentArray(selectedCourse[1]?.content));
		// });
		setCourse(JAVASCRIPT_LESSONS);
		setContent(
			HandleTransformContentStringToContentArray(
				JAVASCRIPT_LESSONS[1]?.content
			)
		);
	}, []);

	const handleSelectLessonChange = (lessonId) =>
		setSelectedLessonId(lessonId);

	const handleChangeToPreviousLesson = () => {
		if (selectedLessonId <= 1) return;
		else if (!course[selectedLessonId - 1]?.content) {
			setContent(
				HandleTransformContentStringToContentArray(
					course[selectedLessonId - 2]?.content
				)
			);
			setSelectedLessonId(selectedLessonId - 2);
		} else {
			setContent(
				HandleTransformContentStringToContentArray(
					course[selectedLessonId - 1]?.content
				)
			);
			setSelectedLessonId(selectedLessonId - 1);
		}
	};
	const handleChangeToNextLesson = () => {
		if (selectedLessonId >= course.length - 1) return;
		else if (!course[selectedLessonId + 1]?.content) {
			setContent(
				HandleTransformContentStringToContentArray(
					course[selectedLessonId + 2]?.content
				)
			);
			setSelectedLessonId(selectedLessonId + 2);
		} else {
			setContent(
				HandleTransformContentStringToContentArray(
					course[selectedLessonId + 1]?.content
				)
			);
			setSelectedLessonId(selectedLessonId + 1);
		}
	};

	console.log("content", content);
	console.log("course", course);

	return (
		<div id="course" className="container">
			<ul className="sidebar">
				{course.map((lesson) => (
					<SidebarItem
						key={lesson.id}
						isSelected={
							lesson.id ===
							selectedLessonId
						}
						item={lesson}
						selectLessonHandler={
							handleSelectLessonChange
						}
						setContent={setContent}
					/>
				))}
			</ul>

			<main className="article">
				{content.length !== 0 ? (
					<>
						{content.map((item) => (
							<ContentItem
								key={item.id}
								type={item.type}
								data={item.data}
							/>
						))}
					</>
				) : (
					<p className="title">
						Still in progress...
					</p>
				)}

				<div className="navigation">
					<button
						className="button-action"
						onClick={
							handleChangeToPreviousLesson
						}
					>
						Previous
					</button>

					<button
						className="button-action"
						onClick={
							handleChangeToNextLesson
						}
					>
						Next
					</button>
				</div>
			</main>
		</div>
	);
}
