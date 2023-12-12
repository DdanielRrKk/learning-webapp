function PasswordInput({labelText, value, changeHandler}) {
	return (
		<label for='password'>
			{labelText}
			<input
				type='password'
				name='password'
				value={value}
				onChange={changeHandler}
			/>
		</label>
	);
}

export default PasswordInput;
