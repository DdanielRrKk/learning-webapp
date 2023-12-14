import React from 'react';

import {useParams} from 'react-router';

import {MAX_LENGTH, MAX_LONG_LENGTH} from '../../utils/constants';

import styles from './FeedbackPage.module.css';

import {useLocation} from 'react-router-dom';

function FeedbackPage() {
	const {feedbackId} = useParams();
	const location = useLocation();
	const {headerText, buttonText, titlePlaceholder, messagePlaceholder} = location.data;

	const [title, setTitle] = React.useState('');
	const [message, setMessage] = React.useState('');

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
				<p>{headerText}</p>

				<form onSubmit={handleSubmit}>
					<input
						className='input-action'
						value={title}
						onChange={handleTitleChange}
						maxLength={MAX_LENGTH}
						placeholder={titlePlaceholder}
					/>

					<textarea
						className='input-action'
						rows='4'
						value={message}
						onChange={handleMessageChange}
						maxLength={MAX_LONG_LENGTH}
						placeholder={messagePlaceholder}
						required
					/>

					<button
						type='submit'
						className='button-action'
					>
						{buttonText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default FeedbackPage;
