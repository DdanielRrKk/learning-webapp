import styles from './form.module.css';

function PasswordInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='password'
			className={styles.formInput}
		>
			{labelText}
			<input
				type='password'
				name='password'
				value={value}
				onChange={changeHandler}
				autoComplete='on'
			/>
		</label>
	);
}

export default PasswordInput;
