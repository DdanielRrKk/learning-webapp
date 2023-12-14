import styles from './form.module.css';

function EmailInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='email'
			className={styles.formInput}
		>
			{labelText}
			<input
				type='email'
				name='email'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default EmailInput;
