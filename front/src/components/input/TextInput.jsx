import styles from './form.module.css';

function TextInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='text'
			className={styles.formInput}
		>
			{labelText}:
			<input
				name='text'
				type='text'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default TextInput;
