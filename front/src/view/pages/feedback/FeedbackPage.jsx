import React from 'react';

import {useParams} from 'react-router';

import {MAX_LENGTH, MAX_LONG_LENGTH, FeedbackIdeaSet, FeedbackProblemSet} from '../../../utils/constants';

import styles from './FeedbackPage.module.css';

function FeedbackPage() {
	const {feedbackId} = useParams();

	const [title, setTitle] = React.useState('');
	const [message, setMessage] = React.useState('');

	const [set, setSet] = React.useState({});

	React.useEffect(() => {
		switch (feedbackId) {
			case 'problem':
				setSet(FeedbackProblemSet);
				break;
			case 'idea':
				setSet(FeedbackIdeaSet);
				break;
			default:
				break;
		}
	}, []);

	const handleTitleChange = e => setTitle(e.target.value);
	const handleMessageChange = e => setMessage(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		const feedback = {
			title: title,
			description: message,
		};

		console.log('feedback:', feedback);

		setMessage('');
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<p>{set.title}</p>

				<form onSubmit={handleSubmit}>
					<input
						className='input-action'
						value={title}
						onChange={handleTitleChange}
						maxLength={MAX_LENGTH}
						placeholder={set.titlePlaceholder}
					/>

					<textarea
						className='input-action'
						rows='4'
						value={message}
						onChange={handleMessageChange}
						maxLength={MAX_LONG_LENGTH}
						placeholder={set.messagePlaceholder}
						required
					/>

					<button
						type='submit'
						className='button-action'
					>
						{set.buttonText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default FeedbackPage;
