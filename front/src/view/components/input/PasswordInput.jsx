function PasswordInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='password'
			className='form-input'
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
