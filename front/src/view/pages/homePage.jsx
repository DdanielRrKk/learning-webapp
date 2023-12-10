import React from 'react';

import {Link} from 'react-router-dom';

import CourseItem from '../../view/components/courseItem';

import {GetAllCourses} from '../../api/coursesAPI';
import {BOXES} from '../../helpers/constants';

export default function HomePage() {
	const [courses, setCourses] = React.useState(BOXES);

	const handleBuyMeACoffeeClick = () => {
		console.log('clicked');
	};

	// React.useEffect(() => {
	//     GetAllCourses().then((data) => {
	//         console.log('Response received:', data);
	//         setCourses(data)
	//     })
	// }, []);

	return (
		<div
			id='home'
			className='container'
		>
			<div className='content'>
				<h1>Want to learn programming languages?</h1>

				<img
					src='./src/assets/prime-code-academy-logo-light.svg'
					alt='PrimeCode Academy'
				/>

				<p>
					PrimeCode Academy allows you to learn programming languages from the comfort of
					your own home. Weather your goal is to become a full-stack developer or just
					learn the basics, we have a course for you.
				</p>

				<h3>Migrate to Language:</h3>

				<Link
					className='button-action'
					to={'/compare'}
				>
					Migrate
				</Link>

				<h3>Learn new Language:</h3>

				<div className='content-grid'>
					{courses.map(box => (
						<CourseItem box={box} />
					))}
				</div>

				<div className='buttons-container'>
					<button
						className='button-action'
						onClick={handleBuyMeACoffeeClick}
					>
						Buy me a Coffee
					</button>

					<Link
						className='button-action'
						to={'/support'}
					>
						Offer Support
					</Link>
				</div>
			</div>
		</div>
	);
}
