function EmailInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='email'
			className='form-input'
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
