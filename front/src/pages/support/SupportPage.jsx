import React from 'react';

import {Link} from 'react-router-dom';

import styles from './SupportPage.module.css';

function SupportPage() {
	const ideaData = {
		headerText: 'Give an Idea',
		buttonText: 'Submit Idea',
		titlePlaceholder: 'Title of the Idea',
		messagePlaceholder: 'Describe the Idea...',
	};
	const problemData = {
		headerText: 'Report Problem',
		buttonText: 'Submit Problem',
		titlePlaceholder: 'Problem Title',
		messagePlaceholder: 'Describe the problem...',
	};
	return (
		<div className={styles.container}>
			<p>Support Our Page</p>

			<div>
				<Link
					className='button-action'
					to={'/create'}
				>
					Write a Course
				</Link>

				<Link
					className='button-action'
					to={{
						pathname: '/feedback/idea',
						state: {data: ideaData},
					}}
				>
					Give an Idea
				</Link>

				<Link
					className='button-action'
					to={{
						pathname: '/feedback/problem',
						state: {data: problemData},
					}}
				>
					Report a Problem
				</Link>
			</div>
		</div>
	);
}

export default SupportPage;
