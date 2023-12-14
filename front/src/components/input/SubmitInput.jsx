import styles from './form.module.css';

function SubmitInput({value}) {
	return (
		<input
			className={styles.formSubmit}
			type='submit'
			value={value}
		/>
	);
}

export default SubmitInput;
