function EmailInput({labelText, value, changeHandler}) {
	return (
		<label for='email'>
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
