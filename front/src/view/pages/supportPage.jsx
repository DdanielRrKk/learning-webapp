import React from 'react';

import {Link} from 'react-router-dom';

function SupportPage() {
	return (
		<div className='container container-main-support'>
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
