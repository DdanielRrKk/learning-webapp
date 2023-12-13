function TextInput({labelText, value, changeHandler}) {
	return (
		<label
			htmlFor='text'
			className='form-input'
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
