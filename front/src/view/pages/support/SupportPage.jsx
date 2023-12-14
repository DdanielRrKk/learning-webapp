import React from 'react';

import {Link} from 'react-router-dom';

import styles from './SupportPage.module.css';

function SupportPage() {
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
					to={'/feedback/idea'}
				>
					Give an Idea
				</Link>

				<Link
					className='button-action'
					to={'/feedback/problem'}
				>
					Report a Problem
				</Link>
			</div>
		</div>
	);
}

export default SupportPage;
