import React from 'react';

import {MigrationConcept, MigrationJavaScript, MigrationPython} from '../../../utils/constants';

import styles from './LanguageComparePage.module.css';

function LanguageComparePage() {
	const [conceptArray, setConceptArray] = React.useState(MigrationConcept);
	const [firstLanguageArrays, setFirstLanguageArrays] = React.useState(MigrationJavaScript);
	const [secondLanguageArrays, setSecondLanguageArrays] = React.useState(MigrationPython);

	const handleChangeFirstLanguage = e => {
		setFirstLanguage(e.target.value);
	};
	const handleChangeSecondLanguage = e => {
		setSecondLanguage(e.target.value);
	};

	return (
		<div className={styles.container}>
			<h1>Language Compare Page</h1>

			<div className={styles.dropdown}>
				<div>
					<h3>Concept</h3>
				</div>

				<div>
					<label>First Language</label>
					<select onChange={handleChangeFirstLanguage}>
						<option value='JavaScript'>JavaScript</option>
						<option value='Python'>Python</option>
						<option value='C#'>C#</option>
						<option value='C++'>C++</option>
					</select>
				</div>

				<div>
					<label>Second Language</label>
					<select onChange={handleChangeSecondLanguage}>
						<option value='JavaScript'>JavaScript</option>
						<option value='Python'>Python</option>
						<option value='C#'>C#</option>
					</select>
				</div>
			</div>

			<div className={styles.comparison}>
				<div className='concept'>
					{conceptArray.map(item => {
						return <p key={item.id}>{item.data}</p>;
					})}
				</div>

				<div className='firstLanguage'>
					{firstLanguageArrays.map(item => {
						return <p key={item.id}>{item.data}</p>;
					})}
				</div>

				<div className='secondLanguage'>
					{secondLanguageArrays.map(item => {
						return <p key={item.id}>{item.data}</p>;
					})}
				</div>
			</div>
		</div>
	);
}

export default LanguageComparePage;
