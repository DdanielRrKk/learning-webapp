import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeLesson } from "../../redux/lessonSlice/lessonSlice";

import ContentItem from "../../view/components/contentItem";

import { HandleTransformContentStringToContentArray } from "../../helpers/helpers";
import { MAX_LENGTH, WRITE_PAGE_PLACEHOLDER } from "../../helpers/constants";

export default function WritePage() {
	const lessonForEdit = useSelector((state) => state.lesson);
	const dispatch = useDispatch();

	const [lessonId, setLessonId] = React.useState(null);
	const [title, setTitle] = React.useState("");

	const [contentString, setContentString] = React.useState("");
	const [contentArray, setContentArray] = React.useState([]);

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	// console.log('content', content);

	React.useEffect(() => {
		if (lessonForEdit) {
			setLessonId(lessonForEdit.id);
			setTitle(lessonForEdit.title);
			setContentString(lessonForEdit.content);
			setIsMenuOpen(false);
			setContentArray(
				HandleTransformContentStringToContentArray(
					lessonForEdit.content
				)
			);
			dispatch(removeLesson());
		}
	}, []);

	const handleTitleChange = (e) => setTitle(e.target.value);
	const handleContentStringsChange = (e) => {
		setContentString(e.target.value);
		setContentArray(
			HandleTransformContentStringToContentArray(
				e.target.value
			)
		);
	};

	const handleClearContentString = () => {
		setTitle("");
		setContentArray([]);
		setContentString("");
		setIsMenuOpen(false);
	};

	const handleSaveContentString = () => {
		const lessons = localStorage.getItem("lessons")
			? JSON.parse(localStorage.getItem("lessons"))
			: [];

		if (lessonId === null)
			lessons.push({
				id: lessons.length + 1,
				title: title,
				content: contentString,
			});
		else {
			const index = lessons.findIndex(
				(item) => item.id === lessonId
			);
			lessons[index] = {
				id: lessonId,
				title,
				content: contentString,
			};
		}

		localStorage.setItem("lessons", JSON.stringify(lessons));
		history.back();
	};

	return (
		<div id="write-course" className="container">
			<div className="write-section">
				<input
					className="editor-title"
					value={title}
					onChange={handleTitleChange}
					maxLength={MAX_LENGTH}
					placeholder="Lesson Title"
				/>

				<textarea
					className="editor"
					placeholder={WRITE_PAGE_PLACEHOLDER}
					value={contentString}
					onChange={handleContentStringsChange}
				/>
			</div>

			<div className="show-section">
				{contentArray.length > 0 ? (
					<>
						{contentArray.map((item) => (
							<ContentItem
								key={item.id}
								type={item.type}
								data={item.data}
							/>
						))}
					</>
				) : (
					<p className="text-4xl">
						Place for visualizing your
						content
					</p>
				)}
			</div>

			<div id="menu">
				<button
					className={
						!isMenuOpen ? "button-hide" : ""
					}
					onClick={handleSaveContentString}
				>
					Save
				</button>

				<button
					className={
						!isMenuOpen ? "button-hide" : ""
					}
					onClick={handleClearContentString}
				>
					Clear
				</button>

				<button
					className="main-menu-button"
					onClick={() =>
						setIsMenuOpen(!isMenuOpen)
					}
				>
					Menu
				</button>
			</div>
		</div>
	);
}
