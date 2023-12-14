import styles from './form.module.css';

function PhoneInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='phone'
			className={styles.formInput}
		>
			{labelText}:
			<input
				name='phone'
				type='tel'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default PhoneInput;
